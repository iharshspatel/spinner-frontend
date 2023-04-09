import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions: {
      output:{
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }

    },
    css: {
      extract: {
        filename: '[name].css' // change CSS file name to include hash
      }
    }
  }

})
