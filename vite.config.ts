import { defineConfig } from 'vite'
import { resolve } from 'path'
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default defineConfig({
  build: {
    target: 'ie10',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/api.ts'),
      name: 'openAIFetch',
      // the proper extensions will be added
      fileName: 'open-ai-fetch',
      formats: ['es', 'umd']
    },
    outDir: 'dist',
  },
  plugins: [getBabelOutputPlugin({
    allowAllFormats: true,
    presets: [['@babel/preset-env', {
      targets: "> 1%, not dead, IE 10",
      useBuiltIns: false, // Default：false
      modules: false
  }]]})],
})
