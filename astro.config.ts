import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://chrisvanderloo.com/",
	integrations: [
		icon(),
		sitemap(),
	],
	vite: {
	  plugins: [tailwindcss()]
	},
	markdown: {
    shikiConfig: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha"
      },
    },
  },
});
