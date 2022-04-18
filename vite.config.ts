import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import legacy from "@vitejs/plugin-legacy";

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    // The default options are listed below. Pass nothing to use them.
    legacy({
      // for ie11
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(path.resolve(__dirname), 'src') + '/$1'
      }
    ]
  },
  server: {
    host: '127.0.0.1'
  },
  build: {
    target: 'es2015'
  }
})
