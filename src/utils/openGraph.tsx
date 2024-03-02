import sharp from "sharp";
import { html } from "satori-html";
import { readFile } from "node:fs/promises";
import satori, { type SatoriOptions } from "satori";
import { SITE_TITLE } from "../consts";

export interface OgData {
  title: string;
  date: Date;
}

/**
 * Opengraph template to generate svg
 */
const Template = (props: OgData) => (
    html` <div class="bg-zinc-900 p-26 flex flex-col w-full h-full items-center">
    <img style="width: 20rem; border: 6px solid white;" src="https://lasitha.dev/static/casual-photo.jpg"  class="rounded-full" />

    <div class="flex flex-col ml-4 mt-14">
      <span style="" class="text-white font-bold text-4xl">Lasitha Prabodha Weligampola</span>
    </div>
  </div>`
);

/**
 * generate filename / path for generated OG images
 *
 * @param filename filename in asset folder
 * @returns
 */
export const getOgImagePath = (filename: string = SITE_TITLE) => {
  if (filename.startsWith("/")) filename = filename.substring(1);

  if (filename.endsWith("/")) filename = filename.substring(0, filename.length - 1);

  if (filename === "") filename = SITE_TITLE;

  return `./image/${filename}.png`;
};

/**
 * generate opengraph image with satori and return a buffer
 *
 * @param text
 */
const generateOgImage = async (text: string = SITE_TITLE, date: Date = new Date()): Promise<Buffer> => {
  const options: SatoriOptions = {
    width: 1200,
    height: 630,
    embedFont: true,
    fonts: [
      {
        name: "Poppins",
        data: await readFile("./fonts/Poppins-Regular.ttf"),
        weight: 400,
        style: "normal",
      },
      {
        name: "PoppinsSemiBold",
        data: await readFile("./fonts/Poppins-SemiBold.ttf"),
        weight: 600,
        style: "normal",
      },
    ],
  };

  const svg = await satori(
    Template({
      title: text,
      date: date,
    }),
    options
  );

  const sharpSvg = Buffer.from(svg);

  const buffer = await sharp(sharpSvg).toBuffer();

  return buffer;
};

export default generateOgImage;
