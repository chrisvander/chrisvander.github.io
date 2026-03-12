import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://chrisvanderloo.com/",
  integrations: [
      icon(),
      sitemap(),
	],
  vite: {
    plugins: [tailwindcss() as any],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha"
      },
    },
  },
  adapter: cloudflare(),
});
