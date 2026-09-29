# Memoria de piezas 3D

## Estado actual

Fecha: 2026-09-29

El visor 3D del proyecto usa Three.js dentro de `src/components/Laboratorio.astro`.
Las piezas se cargan desde `public/` con estos nombres exactos:

- `caballo_regular.glb`
- `alfil_regular.glb`
- `reina_regular.glb`
- `torre_regular.glb`
- `Peon_regular.glb` (P mayúscula)
- `rey_regular.glb`

El rey ya fue reemplazado por una versión exportada con una textura PNG embebida. Se comprobó que su GLB contiene `1 texture`, `1 image`, UV (`TEXCOORD_0`) y una malla válida.

## Por qué no se veía el material

El material de Blender era procedural:

`Noise Texture -> Mix Shader -> Principled BSDF -> Material Output`

El `.glb` original conservaba la geometría y el material PBR básico, pero no exportaba los nodos `Noise Texture` ni `Mix Shader`. Las piezas originales tenían `textures: 0` e `images: 0`.

La solución fue hornear el resultado procedural a una imagen y exportarla embebida dentro del GLB.

## Procedimiento en Blender para otra pieza

1. Abrir la pieza y seleccionarla.
2. Entrar en `Edit Mode` y seleccionar todo con `A`.
3. Presionar `U > Smart UV Project` y aceptar.
4. Ir al espacio de trabajo `UV Editing`.
5. En el `UV Editor`, hacer clic en `New`.
6. Crear una imagen de `2048 x 2048`, por ejemplo `Alfil_Txt`.
7. Ir a `Shading` y usar el **Shader Editor** de abajo. No agregar objetos en la vista 3D.
8. Agregar `Shift + A > Texture > Image Texture`.
9. Seleccionar la imagen creada (`Alfil_Txt`) y dejar ese nodo seleccionado.
10. Salir a `Object Mode`, seleccionar la pieza y confirmar que tenga borde naranja.
11. En `Render Properties`, elegir `Render Engine: Cycles`.
12. Abrir `Bake`.
13. Elegir `Bake Type: Diffuse`.
14. En `Influence`, dejar solo `Color` activo. `Direct` e `Indirect` deben quedar apagados.
15. Presionar `Bake`.
16. En el `UV/Image Editor`, usar `Image > Save As` y guardar, por ejemplo, `Alfil_Txt.png`.
17. En el `Shader Editor`, conectar `Color` de `Alfil_Txt` al `Base Color` del `Principled BSDF` de arriba.
18. Conectar el `BSDF` de ese Principled directamente a `Surface` de `Material Output`.
19. Dejar fuera el `Mix Shader` procedural.
20. Exportar como `.glb` con la imagen embebida y reemplazar el archivo correspondiente dentro de `public/`.

## Procedimiento corto para la próxima pieza

Mañana, cuando se reemplace otra pieza, no hay que cambiar el código si se conserva el nombre exacto del archivo (`alfil_regular.glb`, `caballo_regular.glb`, etc.). Solo hay que:

1. Hacer `Smart UV Project`.
2. Crear una imagen `Nombre_Txt` de `2048 x 2048`.
3. Agregar `Image Texture` dentro del **Shader Editor**, seleccionar `Nombre_Txt` y dejarlo activo.
4. Usar `Cycles > Bake > Diffuse`, dejando únicamente `Color` activo.
5. Guardar la imagen horneada.
6. Conectar `Color` al `Base Color` del Principled de arriba.
7. Conectar ese `BSDF` directamente a `Material Output > Surface`.
8. Exportar como GLB con la imagen embebida y reemplazar el archivo en `public/`.
9. Recargar la web con `Ctrl + F5` y probar la pieza.

El código ya detecta materiales con textura, conserva el patrón marmolado y permite teñirlo con el color elegido.

## Errores encontrados y solución

### `No valid selected objects`

La pieza no estaba seleccionada. Solución: volver a la vista 3D, hacer clic sobre la pieza hasta que tenga borde naranja y volver a presionar `Bake`.

### `Combined bake pass requires Emit...`

El tipo de bake seguía en `Combined`. Solución: cambiarlo a `Diffuse` y dejar solo `Color` activo.

### Menú incorrecto al presionar `Shift + A`

Si aparece una ventana para crear `Plane`, `Cube`, etc., el cursor estaba en la vista 3D. Para agregar `Image Texture`, el cursor debe estar dentro del **Shader Editor**.

### Ver la imagen horneada

Si se muestra el mapa marmolado pero desaparecen los nodos, el área cambió al `Image Editor`. Cambiar el tipo de editor de esa área nuevamente a `Shader Editor`.

### El modelo desaparece al agregar el tintado

Esto ocurrió al declarar `uniform vec3 marbleTint` dentro de `main()` del shader. WebGL mostraba `program not valid` y el canvas quedaba vacío.

La corrección ya está aplicada en `src/components/Laboratorio.astro`: el `uniform` se declara fuera de `main()`, dentro de la sección `common` del fragment shader. No volver a mover esa declaración dentro del bloque de `map_fragment`.

### El modelo aparece pero no cambia de color

La línea correcta para `applyMeshColor()` es:

```js
mat.color.set(targetColor);
```

No usar la versión que fuerza blanco cuando existe `mat.map`, porque entonces se conserva la textura pero el selector deja de teñirla.

## Cambios hechos en el código

En `Laboratorio.astro`, `applyMeshColor()` aplica el color elegido también a materiales con textura:

```js
mat.color.set(targetColor);
```

Esto permite que el selector de colores tiña el marmolado sin eliminar el patrón. Antes se usaba blanco para materiales con `map`, por lo que la textura se veía pero el selector no cambiaba el color.

Las texturas horneadas se multiplican por el color elegido. Si en el futuro se necesita mostrar el color original sin teñir, usar blanco en materiales con mapa:

```js
mat.color.set(mat.map ? '#ffffff' : targetColor);
```

## Checklist antes de continuar

- El GLB nuevo contiene una textura embebida.
- El nombre coincide exactamente con la ruta en `pieceModels`.
- La imagen está conectada al `Base Color`.
- El `Principled BSDF` está conectado directamente a `Material Output`.
- El GLB tiene al menos `textures: 1`, `images: 1` y `TEXCOORD_0`.
- Se probó la pieza en la web con `Ctrl + F5`.
- Se recorrieron las piezas con las flechas y el modelo aparece sin errores WebGL.
- Ejecutar `npm run build` después de reemplazar archivos o cambiar código.
