import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: false,
    watch: {
      ignored: ['**/public/videos/**', '**/*.mp4', '**/*.mov', '**/*.webm', '**/dist/**'],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const normalized = id.replace(/\\/g, '/');
            if (
              normalized.includes('/node_modules/react/') ||
              normalized.includes('/node_modules/react-dom/') ||
              normalized.includes('/node_modules/react-router/') ||
              normalized.includes('/node_modules/react-router-dom/')
            ) {
              return 'vendor-react';
            }
            if (normalized.includes('/node_modules/three/')) {
              return 'vendor-three';
            }
            if (normalized.includes('/node_modules/framer-motion/')) {
              return 'vendor-motion';
            }
            if (normalized.includes('/node_modules/lucide-react/')) {
              return 'vendor-icons';
            }
            return 'vendor'; // all other node_modules
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
