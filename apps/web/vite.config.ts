import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
   base: '/web/',
  plugins: [react()],
  optimizeDeps: {
    include: ['rtl-react-hooks'],
  },
  build: {
    outDir: 'build',
  },
})
