import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (
    //         id.includes('@popperjs/core') ||
    //         id.includes('react-bootstrap') ||
    //         id.includes('bootstrap')
    //       ) {
    //         return 'bootstrap'
    //       }
    //     },
    //   },
    // },
    chunkSizeWarningLimit: 1024,
  },
})
