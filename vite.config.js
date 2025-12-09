import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  base: './', // Use relative paths for assets
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 5174 // Avoid conflict with main project
  }
});
