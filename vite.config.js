import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    },
  },
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
  build: {
    target: 'esnext'
  }
})
