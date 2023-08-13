import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
      // eslint-disable-next-line no-undef
      '@images': path.resolve(__dirname, './public/images'),
      // eslint-disable-next-line no-undef
      '@pages': path.resolve(__dirname, './src/pages'),
      // eslint-disable-next-line no-undef
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  server: {
    port: 8000
  },
  plugins: [react()],
})
