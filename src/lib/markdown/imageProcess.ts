import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const IMAGE_PATH_URL = path.resolve(__dirname, '../../../public/assets');

export const generateNewImage = (src: string, newName: string): void => {
    const newURL = `${path.join(IMAGE_PATH_URL, newName)}.webp`;
    sharp(src)
        .toFile(newURL, (err, _info) => {
            if (err) console.log(`generate image ${newURL} from ${src} failed.${err}`);
        })
}
