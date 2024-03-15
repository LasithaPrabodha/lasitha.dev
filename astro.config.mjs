import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import expressiveCode from "astro-expressive-code";
import { astroImageTools } from "astro-imagetools";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.lasitha.dev",
  image: {
    service: sharpImageService(),
  },
  integrations: [
    astroImageTools,
    expressiveCode({
      themes: ["one-dark-pro", "github-light"],
    }),
    mdx(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    db(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  adapter: netlify(),
});
