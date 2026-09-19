type CloudinaryResource = {
  public_id: string;
  display_name?: string;
  secure_url?: string;
  format?: string;
  width?: number;
  height?: number;
  asset_folder?: string;
};

type CloudinarySearchResponse = {
  resources?: CloudinaryResource[];
  next_cursor?: string;
};

export type GalleryImage = {
  url: string;
  title: string;
  width?: number;
  height?: number;
};

export type GalleryCategory = {
  name: string;
  images: GalleryImage[];
};

const cloudName = import.meta.env.CLOUDINARY_CLOUD_NAME;
const apiKey = import.meta.env.CLOUDINARY_API_KEY;
const apiSecret = import.meta.env.CLOUDINARY_API_SECRET;
const galleryFolder = import.meta.env.CLOUDINARY_GALLERY_FOLDER || 'Galeria VAV';

const categoryNames = [
  'Azul perlado',
  'Caramel Latte',
  'Pink marshmellow',
  'Popurri de estilos',
  'Rey carmesi'
];

const toTitle = (value: string) => value
  .replace(/[-_]+/g, ' ')
  .replace(/\b\w/g, (letter) => letter.toUpperCase());

const getDeliveryUrl = (publicId: string, format?: string) => {
  const encodedPublicId = publicId
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  const extension = format ? `.${format}` : '';
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_900,c_fill,g_auto/${encodedPublicId}${extension}`;
};

const searchFolder = async (folder: string): Promise<GalleryImage[]> => {
  if (!cloudName || !apiKey || !apiSecret) return [];

  const expression = `asset_folder:"${folder}" AND resource_type:image`;
  const authorization = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  const images: GalleryImage[] = [];
  let nextCursor: string | undefined;

  do {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/search`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authorization}`,
        'Content-Type': 'application/json'
      },
      cache: 'no-store',
      body: JSON.stringify({
        expression,
        sort_by: [{ created_at: 'desc' }],
        max_results: 100,
        ...(nextCursor ? { next_cursor: nextCursor } : {})
      })
    });

    if (!response.ok) {
      throw new Error(`Cloudinary respondió ${response.status} al consultar ${folder}`);
    }

    const data = await response.json() as CloudinarySearchResponse;
    for (const resource of data.resources || []) {
      images.push({
        url: getDeliveryUrl(resource.public_id, resource.format),
        title: resource.display_name || toTitle(resource.public_id.split('/').pop() || folder),
        width: resource.width,
        height: resource.height
      });
    }
    nextCursor = data.next_cursor;
  } while (nextCursor);

  return images;
};

export const getCloudinaryGallery = async (): Promise<GalleryCategory[]> => {
  if (!cloudName || !apiKey || !apiSecret) return [];

  try {
    return await Promise.all(categoryNames.map(async (name) => ({
      name,
      images: await searchFolder(`${galleryFolder}/${name}`)
    })));
  } catch (error) {
    console.error('No se pudo cargar la galería de Cloudinary:', error);
    return [];
  }
};
