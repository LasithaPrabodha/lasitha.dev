import { Resvg } from "@resvg/resvg-js";
import { html } from "satori-html";
import satori from "satori";
import { SITE_TITLE } from "../consts";
import { readFile } from "node:fs/promises";

import Poppins from "@fontsource/poppins/files/poppins-devanagari-600-normal.woff";

const dimensions = {
  width: 1200,
  height: 630,
};

export interface OgData {
  title: string;
  date: Date;
}

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
const generateOgImage = async (title: string = SITE_TITLE, date: Date = new Date()): Promise<Buffer> => {
  const markup = html`<div class="bg-zinc-900 flex flex-col w-full h-full" style="font-family: 'Quicksand'">
    <div class="flex flex-col w-full h-4/5 p-10 justify-center">
      <div class="text-zinc-400 text-2xl mb-6">
        ${date.toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div
        class="flex text-6xl w-full font-bold leading-snug tracking-tight text-transparent bg-red-400"
        style="font-family: Poppins, sans-serif;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(45deg, #eee, #90a0d9);"
      >
        ${title}
      </div>
    </div>
    <div class="w-full h-1/5 border-t border-zinc-700/50 flex p-10 items-center justify-between text-2xl">
      <div class="flex items-center">
        <span class="ml-3 text-zinc-400">lasitha.dev</span>
      </div>
      <div class="flex items-center">
        <img src="https://lasitha.dev/static/casual-photo.jpg" class="w-20 h-20 rounded-full" />
        <div class="flex flex-col ml-4">
          <span class="text-zinc-400">Lasitha Weligampola</span>
          <span class="text-blue-400">@lu6_fer</span>
        </div>
      </div>
    </div>
  </div>`;

  
  const svg = await satori(markup, {
    fonts: [
      {
        name: "Quicksand",
        data:  await readFile("./dist/fonts/Quicksand-SemiBold.ttf"),
        weight: 500,
      },
      {
        name: "Poppins",
        data:  await readFile("./dist/fonts/Poppins-SemiBold.ttf"),
        weight: 700,
      }
    ],
    width: dimensions.width,
    height: dimensions.height,
  });

  const image = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: dimensions.width,
    },
  }).render();

  return image.asPng();
};

export default generateOgImage;
