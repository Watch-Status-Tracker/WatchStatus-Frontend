/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import eslint from 'vite-plugin-eslint';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/config/tests.jsx',
  },
  server: {
    port: 3000,
    proxy: {
      '/movieAPI': {
        target: process.env.VITE_movieApiEndpoint,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/movieAPI/, ''),
      },
      '/backend': {
        target: 'https://here.will.be.address.of.backend',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/other/, ''),
      },
    },
  },
  plugins: [react(), eslint(), jsconfigPaths()],
});
