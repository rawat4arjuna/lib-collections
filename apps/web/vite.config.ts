import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
   base: '/rexora/web/',
  plugins: [react()],
  optimizeDeps: {
    include: ['@rexora/hooks'],
  },
  build: {
    outDir: 'build',
  },
})
