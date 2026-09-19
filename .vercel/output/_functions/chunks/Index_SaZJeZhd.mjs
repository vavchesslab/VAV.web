import { b as createAstro, d as renderHead, f as addAttribute, i as renderComponent, l as renderTemplate, p as createRenderInstruction, u as maybeRenderHead } from "./server_BuAIcLXN.mjs";
import { t as createComponent } from "./compiler_-FtsM7Lg.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Navbar.astro
createAstro("https://astro.build");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const { showVersionToggle = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<header class="sticky-nav-header" data-astro-cid-l7arcky5><nav class="nav-divider is-visible mx-auto max-w-[1600px] px-6 py-4" data-astro-cid-l7arcky5><div class="version-two-brand" data-astro-cid-l7arcky5><a class="flex items-center gap-3 font-semibold tracking-tight" href="#home" data-astro-cid-l7arcky5><span class="navbar-logo-wrap" data-astro-cid-l7arcky5><img id="logo" src="https://res.cloudinary.com/du83pwamg/image/upload/v1788372944/VAV_BorderBK_vhpnjo.png" alt="VAV Logo" class="pb-2 h-12 w-auto" data-astro-cid-l7arcky5><img src="https://res.cloudinary.com/du83pwamg/image/upload/v1788372944/VAV_BorderBK_vhpnjo.png" alt="" aria-hidden="true" class="navbar-logo-gold pb-2 h-12 w-auto" data-astro-cid-l7arcky5></span><span class="font-bold" data-astro-cid-l7arcky5>Volver a Vertex</span></a></div><div class="nav-actions" data-astro-cid-l7arcky5><a class="version-two-nav-link is-active" href="#home" data-nav="home" data-astro-cid-l7arcky5>Home</a><a class="version-two-nav-link" href="#laboratorio" data-nav="laboratorio" data-astro-cid-l7arcky5>Laboratorio</a><a class="version-two-nav-link" href="#galeria" data-nav="galeria" data-astro-cid-l7arcky5>Galería</a><a class="version-two-nav-link" href="#partidas" data-nav="partidas" data-astro-cid-l7arcky5>Contacto</a>${showVersionToggle && renderTemplate`<a class="version-toggle" href="/" data-astro-cid-l7arcky5>Volver al original</a>`}<span class="nav-active-indicator" aria-hidden="true" data-astro-cid-l7arcky5></span></div><button id="version2-theme-switcher" class="switcher" type="button" role="switch" aria-checked="false" aria-label="Cambiar entre modo claro y oscuro" data-astro-cid-l7arcky5><span class="text-sm" aria-hidden="true" data-astro-cid-l7arcky5>☼</span><span class="switcher-track" data-astro-cid-l7arcky5><span class="switcher-thumb" data-astro-cid-l7arcky5></span></span><span class="text-sm" aria-hidden="true" data-astro-cid-l7arcky5>☾</span></button><span class="nav-line" aria-hidden="true" data-astro-cid-l7arcky5></span></nav></header>${renderScript($$result, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Laboratorio.astro
createAstro("https://astro.build");
var $$Laboratorio = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Laboratorio;
	const { modelSrc = "/caballo.glb", title = "OBJETOS 3D", subtitle = "Vista interactiva del objeto" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section id="laboratorio" class="model-showcase" aria-labelledby="model-showcase-title" data-astro-cid-uxt3at3j><div class="model-showcase__inner" data-astro-cid-uxt3at3j><div class="text-center mb-6" data-astro-cid-uxt3at3j><p class="mt-6 mb-2 text-lg font-semibold uppercase tracking-[0.22em] text-(--accent)" data-astro-cid-uxt3at3j>Laboratorio</p><p class="text-base text-(--muted) max-w-xl mx-auto" data-astro-cid-uxt3at3j>${subtitle}</p></div><div class="model-showcase__layout" data-astro-cid-uxt3at3j><div id="model-showcase-viewer" class="model-showcase__viewer"${addAttribute(modelSrc, "data-model-src")} data-astro-cid-uxt3at3j><div class="model-showcase__top-bar" data-astro-cid-uxt3at3j><div class="model-showcase__palette" role="group" aria-label="Elegir entre piezas y tableros" data-astro-cid-uxt3at3j><button type="button" class="theme-option is-active" data-mode="piece" aria-label="Mostrar pieza" data-astro-cid-uxt3at3j>Piezas</button><button type="button" class="theme-option" data-mode="board" data-model="/tablero.glb" aria-label="Mostrar tablero" data-astro-cid-uxt3at3j>Tableros</button></div><div class="piece-team-controls" role="group" aria-label="Elegir bando de piezas" data-astro-cid-uxt3at3j><button type="button" class="piece-team-btn is-active" data-team="Blancas" aria-label="Personalizar Piezas Blancas" data-astro-cid-uxt3at3j>Blancas</button><button type="button" class="piece-team-btn" data-team="Negras" aria-label="Personalizar Piezas Negras" data-astro-cid-uxt3at3j>Negras</button></div></div><div class="model-showcase__piece-nav" aria-label="Navegación entre piezas" data-astro-cid-uxt3at3j><button type="button" class="piece-nav-button piece-nav-button--prev" data-direction="-1" aria-label="Pieza anterior" data-astro-cid-uxt3at3j><svg class="piece-nav-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" data-astro-cid-uxt3at3j><path d="m15 5-7 7 7 7" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uxt3at3j></path></svg></button><button type="button" class="piece-nav-button piece-nav-button--next" data-direction="1" aria-label="Siguiente pieza" data-astro-cid-uxt3at3j><svg class="piece-nav-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" data-astro-cid-uxt3at3j><path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uxt3at3j></path></svg></button></div><div class="group-color-controls" aria-label="Colores del tablero" data-astro-cid-uxt3at3j><label class="group-color-picker" for="white-squares-color-picker" data-astro-cid-uxt3at3j><span data-astro-cid-uxt3at3j>Color 1</span><input id="white-squares-color-picker" type="hidden" value="#f3f3f3" data-target="Blancas" data-astro-cid-uxt3at3j><div class="board-color-palette" data-target="Blancas" role="group" aria-label="Elegir color 1" data-astro-cid-uxt3at3j></div></label><button type="button" class="match-pieces-btn" id="match-pieces-btn" data-astro-cid-uxt3at3j>Emparejar<br data-astro-cid-uxt3at3j>color de piezas</button><label class="group-color-picker" for="black-squares-color-picker" data-astro-cid-uxt3at3j><span data-astro-cid-uxt3at3j>Color 2</span><input id="black-squares-color-picker" type="hidden" value="#1f1f1f" data-target="Negras" data-astro-cid-uxt3at3j><div class="board-color-palette" data-target="Negras" role="group" aria-label="Elegir color 2" data-astro-cid-uxt3at3j></div></label></div><div class="model-showcase__controls" data-astro-cid-uxt3at3j><div class="model-color-picker" data-astro-cid-uxt3at3j><div class="model-color-picker__header" data-astro-cid-uxt3at3j><span data-astro-cid-uxt3at3j>Color</span></div><input id="piece-color-picker" type="hidden" value="#efece7" data-astro-cid-uxt3at3j><div class="color-palette" role="group" aria-label="Elegir color de la pieza" data-astro-cid-uxt3at3j><div class="color-palette__column" aria-label="Grises" data-astro-cid-uxt3at3j><button type="button" class="color-swatch" style="--swatch: #ffffff" data-color="#ffffff" aria-label="Blanco" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #d9d9d9" data-color="#d9d9d9" aria-label="Gris claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #aaaaaa" data-color="#aaaaaa" aria-label="Gris medio claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #777777" data-color="#777777" aria-label="Gris medio" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #444444" data-color="#444444" aria-label="Gris oscuro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #111111" data-color="#111111" aria-label="Negro" data-astro-cid-uxt3at3j></button></div><div class="color-palette__column" aria-label="Azules" data-astro-cid-uxt3at3j><button type="button" class="color-swatch" style="--swatch: #dbeafe" data-color="#dbeafe" aria-label="Azul muy claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #93c5fd" data-color="#93c5fd" aria-label="Azul claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #60a5fa" data-color="#60a5fa" aria-label="Azul medio claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #2563eb" data-color="#2563eb" aria-label="Azul medio" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #1d4ed8" data-color="#1d4ed8" aria-label="Azul oscuro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #172554" data-color="#172554" aria-label="Azul muy oscuro" data-astro-cid-uxt3at3j></button></div><div class="color-palette__column" aria-label="Rojos" data-astro-cid-uxt3at3j><button type="button" class="color-swatch" style="--swatch: #fee2e2" data-color="#fee2e2" aria-label="Rojo muy claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #fca5a5" data-color="#fca5a5" aria-label="Rojo claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #f87171" data-color="#f87171" aria-label="Rojo medio claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #dc2626" data-color="#dc2626" aria-label="Rojo medio" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #b91c1c" data-color="#b91c1c" aria-label="Rojo oscuro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #450a0a" data-color="#450a0a" aria-label="Rojo muy oscuro" data-astro-cid-uxt3at3j></button></div><div class="color-palette__column" aria-label="Verdes" data-astro-cid-uxt3at3j><button type="button" class="color-swatch" style="--swatch: #dcfce7" data-color="#dcfce7" aria-label="Verde muy claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #86efac" data-color="#86efac" aria-label="Verde claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #4ade80" data-color="#4ade80" aria-label="Verde medio claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #16a34a" data-color="#16a34a" aria-label="Verde medio" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #15803d" data-color="#15803d" aria-label="Verde oscuro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #052e16" data-color="#052e16" aria-label="Verde muy oscuro" data-astro-cid-uxt3at3j></button></div><div class="color-palette__column" aria-label="Amarillos" data-astro-cid-uxt3at3j><button type="button" class="color-swatch" style="--swatch: #fef9c3" data-color="#fef9c3" aria-label="Amarillo muy claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #fde68a" data-color="#fde68a" aria-label="Amarillo claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #facc15" data-color="#facc15" aria-label="Amarillo medio claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #eab308" data-color="#eab308" aria-label="Amarillo medio" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #a16207" data-color="#a16207" aria-label="Amarillo oscuro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #422006" data-color="#422006" aria-label="Amarillo muy oscuro" data-astro-cid-uxt3at3j></button></div><div class="color-palette__column" aria-label="Violetas y rosas" data-astro-cid-uxt3at3j><button type="button" class="color-swatch" style="--swatch: #fce7f3" data-color="#fce7f3" aria-label="Rosa muy claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #f9a8d4" data-color="#f9a8d4" aria-label="Rosa claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #e879f9" data-color="#e879f9" aria-label="Fucsia claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #c026d3" data-color="#c026d3" aria-label="Violeta rosado" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #7e22ce" data-color="#7e22ce" aria-label="Violeta oscuro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #3b0764" data-color="#3b0764" aria-label="Violeta muy oscuro" data-astro-cid-uxt3at3j></button></div><div class="color-palette__column" aria-label="Naranjas" data-astro-cid-uxt3at3j><button type="button" class="color-swatch" style="--swatch: #ffedd5" data-color="#ffedd5" aria-label="Naranja muy claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #fdba74" data-color="#fdba74" aria-label="Naranja claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #fb923c" data-color="#fb923c" aria-label="Naranja medio claro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #ea580c" data-color="#ea580c" aria-label="Naranja medio" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #c2410c" data-color="#c2410c" aria-label="Naranja oscuro" data-astro-cid-uxt3at3j></button><button type="button" class="color-swatch" style="--swatch: #431407" data-color="#431407" aria-label="Naranja muy oscuro" data-astro-cid-uxt3at3j></button></div></div></div></div><div class="model-fallback" data-astro-cid-uxt3at3j>Cargando modelo...</div><p class="model-showcase__model-name" aria-live="polite" data-astro-cid-uxt3at3j>Caballo</p><button type="button" class="model-showcase__continue" aria-controls="model-showcase-editor" aria-expanded="false" data-astro-cid-uxt3at3j>Continuar<svg class="model-showcase__button-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" data-astro-cid-uxt3at3j><path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uxt3at3j></path></svg></button><button type="button" class="model-showcase__back" aria-controls="model-showcase-viewer" aria-hidden="true" data-astro-cid-uxt3at3j><svg class="model-showcase__button-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" data-astro-cid-uxt3at3j><path d="m15 5-7 7 7 7" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uxt3at3j></path></svg>Volver</button></div><aside id="model-showcase-editor" class="model-showcase__editor" aria-label="Visor del resultado final" aria-hidden="true" data-astro-cid-uxt3at3j><div class="model-showcase__editor-header" data-astro-cid-uxt3at3j><div class="model-showcase__editor-title" data-astro-cid-uxt3at3j><p data-astro-cid-uxt3at3j>Resultado final</p></div><div class="final-colors-summary" aria-label="Colores seleccionados" data-astro-cid-uxt3at3j><span class="final-color-chip" title="Piezas Blancas" data-astro-cid-uxt3at3j><span class="final-color-dot" id="final-dot-white-piece" data-astro-cid-uxt3at3j></span> Blancas</span><span class="final-color-chip" title="Piezas Negras" data-astro-cid-uxt3at3j><span class="final-color-dot" id="final-dot-black-piece" data-astro-cid-uxt3at3j></span> Negras</span><span class="final-color-chip" title="Casillas Color 1" data-astro-cid-uxt3at3j><span class="final-color-dot" id="final-dot-white-board" data-astro-cid-uxt3at3j></span> C1</span><span class="final-color-chip" title="Casillas Color 2" data-astro-cid-uxt3at3j><span class="final-color-dot" id="final-dot-black-board" data-astro-cid-uxt3at3j></span> C2</span></div></div><div id="final-model-container" class="final-model-container" data-astro-cid-uxt3at3j><div class="final-model-fallback" data-astro-cid-uxt3at3j>Cargando resultado final...</div></div><div class="model-showcase__editor-summary" data-astro-cid-uxt3at3j><span data-astro-cid-uxt3at3j>Vista Completa 3D</span><small class="final-hint" data-astro-cid-uxt3at3j>Gira y explora el conjunto</small></div></aside></div></div></section>${renderScript($$result, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Laboratorio.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Laboratorio.astro", void 0);
//#endregion
//#region src/lib/cloudinary.ts
var cloudName = "lp0nhnzi";
var apiKey = "317444568887641";
var apiSecret = "ECoCyWeqs7I7buv5g4HcTnbTrzI";
var galleryFolder = "Galeria VAV";
var categoryNames = [
	"Azul perlado",
	"Caramel Latte",
	"Pink marshmellow",
	"Popurri de estilos",
	"Rey carmesi"
];
var toTitle = (value) => value.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
var getDeliveryUrl = (publicId, format) => {
	return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_900,c_fill,g_auto/${publicId.split("/").map((segment) => encodeURIComponent(segment)).join("/")}${format ? `.${format}` : ""}`;
};
var searchFolder = async (folder) => {
	const expression = `asset_folder:"${folder}" AND resource_type:image`;
	const authorization = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
	const images = [];
	let nextCursor;
	do {
		const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/search`, {
			method: "POST",
			headers: {
				Authorization: `Basic ${authorization}`,
				"Content-Type": "application/json"
			},
			cache: "no-store",
			signal: AbortSignal.timeout(8e3),
			body: JSON.stringify({
				expression,
				sort_by: [{ created_at: "desc" }],
				max_results: 100,
				...nextCursor ? { next_cursor: nextCursor } : {}
			})
		});
		if (!response.ok) throw new Error(`Cloudinary respondió ${response.status} al consultar ${folder}`);
		const data = await response.json();
		for (const resource of data.resources || []) images.push({
			url: getDeliveryUrl(resource.public_id, resource.format),
			title: resource.display_name || toTitle(resource.public_id.split("/").pop() || folder),
			width: resource.width,
			height: resource.height
		});
		nextCursor = data.next_cursor;
	} while (nextCursor);
	return images;
};
var getCloudinaryGallery = async () => {
	return Promise.all(categoryNames.map(async (name) => {
		try {
			return {
				name,
				images: await searchFolder(`${galleryFolder}/${name}`)
			};
		} catch (error) {
			console.error(`No se pudo cargar el álbum ${name}:`, error);
			return {
				name,
				images: []
			};
		}
	}));
};
//#endregion
//#region src/components/Galeria.astro
createAstro("https://astro.build");
var $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Galeria;
	const { title = "NUESTRAS PIEZAS Y TABLEROS", subtitle = "Explora la colección completa de nuestros diseños exclusivos" } = Astro.props;
	const categories = await getCloudinaryGallery();
	return renderTemplate`${maybeRenderHead($$result)}<section id="galeria" class="galeria-section mt-15" aria-label="Galería de imágenes" data-astro-cid-pd4bmjx6><div class="galeria__inner" data-astro-cid-pd4bmjx6><p class="mt-0 mb-1 text-lg font-semibold uppercase tracking-[0.22em] text-(--accent) text-center" data-astro-cid-pd4bmjx6>Galería</p><div class="galeria__header text-center mb-6" data-astro-cid-pd4bmjx6><p class="mt-1 text-base text-(--muted) max-w-xl mx-auto" data-astro-cid-pd4bmjx6>${subtitle}</p></div>${categories.length > 0 && renderTemplate`<div class="galeria__selector-wrap" data-astro-cid-pd4bmjx6><label for="galeria-album" data-astro-cid-pd4bmjx6>Elegí un álbum</label><select id="galeria-album" class="galeria__selector" data-astro-cid-pd4bmjx6>${categories.map((category, index) => renderTemplate`<option${addAttribute(`album-${index}`, "value")} data-astro-cid-pd4bmjx6>${category.name}</option>`)}</select></div>`}<div class="galeria__categories" data-astro-cid-pd4bmjx6>${categories.map((category, index) => renderTemplate`<section class="galeria__category"${addAttribute(`album-${index}`, "data-album")}${addAttribute(index !== 0, "hidden")} data-astro-cid-pd4bmjx6><div class="galeria__grid" data-astro-cid-pd4bmjx6>${category.images.map((image) => renderTemplate`<article class="galeria__item group" data-astro-cid-pd4bmjx6><div class="galeria__card" data-astro-cid-pd4bmjx6><div class="galeria__image-placeholder" data-astro-cid-pd4bmjx6><button class="galeria__image-button" type="button"${addAttribute(image.url, "data-lightbox-src")}${addAttribute(`${category.name}: ${image.title}`, "data-lightbox-alt")}${addAttribute(image.title, "data-lightbox-title")}${addAttribute(category.name, "data-lightbox-category")}${addAttribute(`Ver ${image.title} en grande`, "aria-label")} data-astro-cid-pd4bmjx6><img${addAttribute(image.url, "src")}${addAttribute(`${category.name}: ${image.title}`, "alt")} loading="lazy"${addAttribute(image.width, "width")}${addAttribute(image.height, "height")} data-astro-cid-pd4bmjx6></button></div><div class="galeria__caption" data-astro-cid-pd4bmjx6><h3 data-astro-cid-pd4bmjx6>${image.title}</h3><p data-astro-cid-pd4bmjx6>${category.name}</p></div></div></article>`)}</div></section>`)}</div>${categories.length === 0 && renderTemplate`<p class="galeria__empty" data-astro-cid-pd4bmjx6>No hay álbumes disponibles en este momento.</p>`}</div><div class="galeria__lightbox" id="galeria-lightbox" hidden role="dialog" aria-modal="true" aria-label="Imagen ampliada" data-astro-cid-pd4bmjx6><div class="galeria__lightbox-toolbar" data-astro-cid-pd4bmjx6><div data-astro-cid-pd4bmjx6><p id="galeria-lightbox-category" class="galeria__lightbox-category" data-astro-cid-pd4bmjx6></p><h2 id="galeria-lightbox-title" class="galeria__lightbox-title" data-astro-cid-pd4bmjx6></h2></div><button class="galeria__lightbox-close" type="button" aria-label="Cerrar imagen ampliada" data-astro-cid-pd4bmjx6>&times;</button></div><div class="galeria__lightbox-viewer" data-astro-cid-pd4bmjx6><button id="galeria-lightbox-prev" class="galeria__lightbox-arrow" type="button" aria-label="Imagen anterior" data-astro-cid-pd4bmjx6>&#8592;</button><img id="galeria-lightbox-image" class="galeria__lightbox-image" alt="" data-astro-cid-pd4bmjx6><button id="galeria-lightbox-next" class="galeria__lightbox-arrow" type="button" aria-label="Imagen siguiente" data-astro-cid-pd4bmjx6>&#8594;</button></div><div id="galeria-lightbox-thumbnails" class="galeria__lightbox-thumbnails" aria-label="Miniaturas del álbum" data-astro-cid-pd4bmjx6></div><p id="galeria-lightbox-position" class="galeria__lightbox-position" aria-live="polite" data-astro-cid-pd4bmjx6></p></div></section>${renderScript($$result, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Galeria.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Galeria.astro", void 0);
//#endregion
//#region src/components/Contacto.astro
createAstro("https://astro.build");
var $$Contacto = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Contacto;
	const { title = "¿QUERÉS SABER MÁS?", subtitle = "Escribínos para conocer valores, colores disponibles y modelos de nuestros juegos.", imageSrc = "https://res.cloudinary.com/lp0nhnzi/image/upload/v1789705399/IMG_0676_PS_02.png" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section id="partidas" class="contacto-section"${addAttribute(`--contact-image: url("${imageSrc}")`, "style")} aria-label="Sección de contacto" data-astro-cid-7b4tjujo><div class="contacto__inner" data-astro-cid-7b4tjujo><div class="contacto__content" data-astro-cid-7b4tjujo><p class="contacto__eyebrow" data-astro-cid-7b4tjujo>Contacto</p><div class="contacto__header" data-astro-cid-7b4tjujo><h2 data-astro-cid-7b4tjujo>${title}</h2><p data-astro-cid-7b4tjujo>${subtitle}</p></div><div class="contacto__divider" aria-hidden="true" data-astro-cid-7b4tjujo></div><div class="contacto__details" data-astro-cid-7b4tjujo><h3 data-astro-cid-7b4tjujo>Consultá por tu juego</h3><p data-astro-cid-7b4tjujo>Te contamos todo lo que necesitás saber sobre nuestros juegos disponibles.</p></div><a href="https://ig.me/m/vavchesslab" target="_blank" rel="noopener noreferrer" class="contacto__button" data-astro-cid-7b4tjujo><span data-astro-cid-7b4tjujo>Contactar</span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" data-astro-cid-7b4tjujo><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6-6 6 6-6 6" data-astro-cid-7b4tjujo></path></svg></a></div></div></section>`;
}, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Contacto.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer-container" data-astro-cid-jo6i4kqk><div class="footer__inner mx-auto max-w-[1600px] px-0 py-20 flex flex-col sm:flex-row items-center justify-between gap-6" data-astro-cid-jo6i4kqk><div class="flex items-center gap-3 font-semibold tracking-tight" data-astro-cid-jo6i4kqk><img id="footer-logo" src="https://res.cloudinary.com/du83pwamg/image/upload/v1788372944/VAV_BorderWH_omznb8.png" alt="VAV Logo" class="h-8 w-auto" data-astro-cid-jo6i4kqk><p class="text-xs text-(--muted) text-start" data-astro-cid-jo6i4kqk>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Volver a Vertex. <br data-astro-cid-jo6i4kqk>Todos los derechos reservados.</p></div><div class="flex items-center gap-6 text-sm text-(--muted)" data-astro-cid-jo6i4kqk><a href="#home" class="hover:text-(--accent) transition" data-astro-cid-jo6i4kqk>Home</a><a href="#laboratorio" class="hover:text-(--accent) transition" data-astro-cid-jo6i4kqk>Laboratorio</a><a href="#galeria" class="hover:text-(--accent) transition" data-astro-cid-jo6i4kqk>Galería</a><a href="#partidas" class="hover:text-(--accent) transition" data-astro-cid-jo6i4kqk>Contacto</a></div><div data-astro-cid-jo6i4kqk><a href="https://www.instagram.com/vavchesslab/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-(--accent) transition" data-astro-cid-jo6i4kqk><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-astro-cid-jo6i4kqk><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2" data-astro-cid-jo6i4kqk></rect><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" data-astro-cid-jo6i4kqk></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" data-astro-cid-jo6i4kqk></circle></svg><span data-astro-cid-jo6i4kqk>/vavchesslab</span></a></div></div></footer>`;
}, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/GoUp.astro
var $$GoUp = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<button id="go-up-button" class="go-up-button" type="button" aria-label="Volver arriba" data-astro-cid-plaejxm6><svg class="go-up-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" data-astro-cid-plaejxm6><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-plaejxm6></path></svg></button>${renderScript($$result, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/GoUp.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/GoUp.astro", void 0);
//#endregion
//#region src/components/Index.astro
createAstro("https://astro.build");
var $$Index$1 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index$1;
	const props = Astro.props;
	const accent = props.accent || "#147d72";
	const buttonText = props.buttonText || "#ffffff";
	const goldDeep = props.goldDeep || "#8f5b16";
	const goldBase = props.goldBase || "#d4a72c";
	const goldLight = props.goldLight || "#fff1a8";
	const goldBright = props.goldBright || "#f2c94c";
	const goldShadow = props.goldShadow || "#9b681c";
	const showVersionToggle = props.showVersionToggle ?? true;
	return renderTemplate`<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><script>
			(() => {
				const savedTheme = localStorage.getItem('ajedrez-theme');
				const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
				document.documentElement.dataset.theme = savedTheme || preferredTheme;
			})();
		<\/script>${renderHead($$result)}</head><body><div id="intro-animation" class="intro-animation" aria-hidden="true"><div id="intro-animation-container" class="intro-animation-container"></div></div><div class="version-two-shell"${addAttribute(`--accent: ${accent}; --button-text: ${buttonText}; --gold-deep: ${goldDeep}; --gold-base: ${goldBase}; --gold-light: ${goldLight}; --gold-bright: ${goldBright}; --gold-shadow: ${goldShadow};`, "style")}>${renderComponent($$result, "Navbar", $$Navbar, { "showVersionToggle": showVersionToggle })}<main class="page-content min-h-screen py-0"><section id="home" class="version-two-hero mx-auto max-w-full"><video class="version-two-video" autoplay muted loop playsinline aria-label="Animación de un tablero de ajedrez"><source src="https://res.cloudinary.com/du83pwamg/video/upload/v1789358330/AjedrezFinal_yg9ayu.webm" type="video/webm"></video><div class="version-two-copy"><p class="version-two-eyebrow mb-5 text-sm font-semibold uppercase tracking-[0.22em]">Piezas únicas y personalizables</p><h1 class="text-5xl font-semibold leading-[.98] tracking-[-0.04em] sm:text-7xl">Tu próxima jugada empieza aquí.</h1><p class="max-w-2xl mt-7 text-lg leading-8 text-(--muted)">Creamos piezas de ajedrez y tableros únicos de forma <b>totalmente artesanal</b>, pensados para quienes disfrutan del juego y también valoran el diseño. Trabajamos con materiales de excelente calidad y durabilidad, cuidando cada detalle para conseguir productos atractivos, resistentes y hechos para acompañarte en el tiempo.</p><div class="mt-9 flex flex-wrap justify-center gap-3"><a class="contact-button rounded-full px-6 py-3 font-semibold transition" href="https://ig.me/m/vavchesslab" target="_blank" rel="noopener noreferrer">Contactar</a><a class="work-button rounded-full border px-6 py-3 font-semibold transition" href="#galeria">Nuestros trabajos</a></div></div></section>${renderComponent($$result, "Laboratorio", $$Laboratorio, {
		"modelSrc": "/caballo.glb",
		"title": "Tu pieza 3D",
		"subtitle": "Personaliza un tablero y piezas a gusto"
	})}${renderComponent($$result, "Galeria", $$Galeria, {})}${renderComponent($$result, "Contacto", $$Contacto, {})}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderComponent($$result, "GoUp", $$GoUp, {})}</div><script>
			(() => {
				const updateLogo = () => {
					const logo = document.querySelector('#logo');
					const theme = document.documentElement.dataset.theme;
					if (logo) logo.src = theme === 'dark'
						? 'https://res.cloudinary.com/du83pwamg/image/upload/v1788372944/VAV_BorderWH_omznb8.png'
						: 'https://res.cloudinary.com/du83pwamg/image/upload/v1788372944/VAV_BorderBK_vhpnjo.png';
				};

				const savedTheme = localStorage.getItem('ajedrez-theme');
				const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
				document.documentElement.dataset.theme = savedTheme || preferredTheme;
				updateLogo();

				const switcher = document.querySelector('#version2-theme-switcher');
				switcher?.addEventListener('click', () => {
					const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
					document.documentElement.dataset.theme = nextTheme;
					localStorage.setItem('ajedrez-theme', nextTheme);
					switcher.setAttribute('aria-checked', String(nextTheme === 'dark'));
					updateLogo();
				});
				if (document.documentElement.dataset.theme === 'dark') switcher?.setAttribute('aria-checked', 'true');
			})();
		<\/script>${renderScript($$result, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/Index.astro", void 0);
//#endregion
//#region src/components/ColorSetup.astro
var $$ColorSetup = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Index", $$Index$1, {
		accent: "#e8c031",
		buttonText: "#ffffff",
		goldDeep: "#8f5b16",
		goldBase: "#e8c031",
		goldLight: "#fff1a8",
		goldBright: "#f2c94c",
		goldShadow: "#9b681c",
		"showVersionToggle": false
	})}`;
}, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/components/ColorSetup.astro", void 0);
//#endregion
//#region src/pages/Index.astro
var Index_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "ColorSetup", $$ColorSetup, {})}`;
}, "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/pages/Index.astro", void 0);
var $$file = "F:/DISCO/BACKUP 2025/Escritorio/Freelance/Nachito AJEDREZ/Ajedrez Website/src/pages/Index.astro";
var $$url = "/Index";
//#endregion
//#region \0virtual:astro:page:src/pages/Index@_@astro
var page = () => Index_exports;
//#endregion
export { page, __exportAll as t };
