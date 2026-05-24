import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aggelito.github.io',
  base: '/simgolf',
  vite: {
    plugins: [tailwindcss()],
  },
});
