import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Ensure Rollup resolves common modules correctly
      external: [],
    },
  },
  server: {
    open: true, // Optional: Opens the browser automatically during dev
  },
});
