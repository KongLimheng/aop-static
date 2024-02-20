import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
const manifestForPlugIn = {
  registerType: 'autoUpdate',
  // strategies: 'injectManifest',
  // srcDir: '/',
  includeAssests: ['./assets/*'],
  manifest: {
    name: 'Account Opening Portal',
    short_name: 'aop-static',
    description: 'Account Opening Portal',
    icons: [
      {
        src: '/cana-logo-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/cana-logo-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/cana-logo-196x196.png',
        sizes: '196x196',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/cana-logo-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      // {
      //   src: '/apple-touch-icon.png',
      //   sizes: '180x180',
      //   type: 'image/png',
      //   purpose: 'apple touch icon',
      // },
    ],
    theme_color: '#ffffffb3',
    background_color: '#f0e7db',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
}
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), splitVendorChunkPlugin(), VitePWA(manifestForPlugIn)],
  preview: {
    port: 8024,
  },
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
