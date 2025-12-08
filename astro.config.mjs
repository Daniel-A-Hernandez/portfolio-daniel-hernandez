// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site:'https://daniel-a-hernandez.github.io',
  base: '/portfolio-daniel-hernandez',
  vite: {
    plugins: [tailwindcss()]
  }
  
});