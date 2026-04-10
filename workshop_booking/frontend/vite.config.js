import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname),
  base: '/static/workshop_app/dist/',
  build: {
    outDir: resolve(__dirname, '../workshop_app/static/workshop_app/dist'),
    emptyOutDir: true,
    manifest: 'manifest.json',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx'),
      },
    },
  },
  server: {
    port: 5173,
    origin: 'http://localhost:5173',
  },
});
