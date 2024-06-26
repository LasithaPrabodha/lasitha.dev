import { html } from "satori-html";
import satori from "satori";
import { SITE_TITLE } from "consts";
import { readFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";

const dimensions = {
  width: 1200,
  height: 630,
};

export interface OgData {
  title: string;
  date: Date;
}

/**
 * generate opengraph image with satori and return a buffer
 *
 * @param text
 */
const generateOgImage = async (title: string = SITE_TITLE, date: Date = new Date()): Promise<Buffer> => {
  const markup = html`<div tw="bg-zinc-900 flex flex-col w-full h-full" style="font-family: 'Quicksand'">
    <div tw="flex flex-col w-full h-4/5 p-10 justify-center">
      <div tw="text-zinc-400 text-2xl mb-6">
        ${date.toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div
        tw="flex text-6xl w-full font-bold leading-snug tracking-tight text-transparent bg-red-400"
        style="font-family: Poppins, sans-serif;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(45deg, #eee, #90a0d9);"
      >
        ${title}
      </div>
    </div>
    <div tw="w-full h-1/5 border-t border-zinc-700/50 flex p-10 items-center justify-between text-2xl">
      <div tw="flex items-center">
        <span tw="ml-3 text-zinc-400">lasitha.dev</span>
      </div>
      <div tw="flex items-center">
        <img src="https://www.lasitha.dev/static/casual-photo-192x192.png" tw="w-20 h-20 rounded-full" />
        <div tw="flex flex-col ml-4">
          <span tw="text-zinc-400">Lasitha Weligampola</span>
          <span tw="text-blue-400">@lu6_fer</span>
        </div>
      </div>
    </div>
  </div>`;

  const svg = await satori(markup, {
    fonts: [
      {
        name: "Quicksand",
        data: await readFile("./public/fonts/quicksand-semibold.ttf"),
        weight: 500,
      },
      {
        name: "Poppins",
        data: await readFile("./public/fonts/poppins-semibold.ttf"),
        weight: 700,
      },
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
