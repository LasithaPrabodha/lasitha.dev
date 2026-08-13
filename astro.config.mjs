import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
  output: "server",
  site: "https://www.lasitha.dev",
  image: {
    service: sharpImageService(),
  },
  integrations: [
    expressiveCode({
      themes: ["one-dark-pro", "github-light"],
      styleOverrides: {
        frames: {
          frameBoxShadowCssValue: "var(--shadow)",
        },
      },
      emitExternalStylesheet: false,
    }),
    react(),
    mdx(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    ssr: {
      external: ["@resvg/resvg-js"],
    },
    build: {
      rollupOptions: {
        external: ["@resvg/resvg-js"],
      },
    },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  adapter: netlify(),
});
