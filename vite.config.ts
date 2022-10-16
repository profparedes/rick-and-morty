import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, './src/@types'),
      assets: path.resolve(__dirname, './src/assets'),
      context: path.resolve(__dirname, './src/context'),
      components: path.resolve(__dirname, './src/components'),
      helpers: path.resolve(__dirname, './src/helpers'),
      hooks: path.resolve(__dirname, './src/hooks'),
      pages: path.resolve(__dirname, './src/pages'),
      Routes: path.resolve(__dirname, './src/Routes'),
      services: path.resolve(__dirname, './src/services'),
      styles: path.resolve(__dirname, './src/styles'),
      types: path.resolve(__dirname, './src/types'),
    },
  },
  // https://vitejs.dev/plugins/
  plugins: [react(), ViteWebfontDownload()],
});
