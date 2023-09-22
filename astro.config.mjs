import {
  defineConfig
} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), relativeLinks(), tailwind()],

  site: "https://JRack92.github.io/AstroClon-Nuwinds",
  vite: {
    ssr: {
      noExternal: ['normalize.css'],
    }
  }
  // base: "/AstroClon-Nuwinds"

});

// site: "https://isource.us/",
// base: "dev/WebAstroVersion/"