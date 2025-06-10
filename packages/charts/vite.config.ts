import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@rexora/charts',
      fileName: (format) => `rexora-charts.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled into your library
      external: ['d3'],
      output: {
        // Add global vars for UMD build if needed
        globals: {
          d3: 'd3',
        },
      },
    },
  },
});