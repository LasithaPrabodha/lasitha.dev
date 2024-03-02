import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import node from "@astrojs/node";
import expressiveCode from "astro-expressive-code";

const astroExpressiveCodeOptions = {
  themes: ["one-dark-pro", "github-light"],
};
let adapter = netlify();

if (process.argv[3] === "--node" || process.argv[4] === "--node") {
  adapter = node({ mode: "standalone" });
}

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://lasitha.dev",
  image: {
    service: sharpImageService(),
  },
  integrations: [
    expressiveCode(astroExpressiveCodeOptions),
    mdx(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  adapter: adapter
});
