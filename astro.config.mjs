import {
  defineConfig
} from 'astro/config';
import tailwind from "@astrojs/tailwind";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks(), tailwind()],
  site: "https://JRack92.github.io",
  base: "/AstroClon-Nuwinds/"

});

// site: "https://isource.us/",
// base: "dev/WebAstroVersion/"