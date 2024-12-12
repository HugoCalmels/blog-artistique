import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Utilise un format compatible avec les modules modernes
    outDir: "dist", // Dossier de sortie
  },
  server: {
    mimeTypes: {
      "application/javascript": ["js"],
    },
  },
});
