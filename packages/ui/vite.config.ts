import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path'; // 👈 Make sure to import 'resolve' from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 Add this 'resolve' block
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    dts({
      // Specify output directory
      outDir: 'dist',
      // Specify the tsconfig.json file path to use for .d.ts generation
      tsconfigPath: './tsconfig.json'
    })
  ],
  build: {
    // Build output directory
    outDir: 'dist',
    lib: {
      // Entry file for the component library source
      entry: resolve(__dirname, 'src/index.ts'),
      // A global variable name for the module in UMD build mode
      name: 'MyUIRepo',
      // The output package file name
      fileName: 'ui',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // Make sure to externalize dependencies you don't want to bundle into your library
      external: ['vue'],
      output: {
        // Provide a global variable for these externalized dependencies in UMD build mode
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
