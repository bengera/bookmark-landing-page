import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    htmlPurge(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        mainJS: resolve(__dirname, 'js/main.js'),
      
      }
    }
  }
});
