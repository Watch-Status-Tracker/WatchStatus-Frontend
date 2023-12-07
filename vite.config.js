import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), eslint(), jsconfigPaths()],
});
