import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
const manifestForPlugIn = {
  id: 'aop',
  mode: 'production',
  registerType: 'autoUpdate',
  includeAssets: ['**/*', 'favicon.ico'],
  manifest: {
    name: 'Account Opening Portal',
    short_name: 'COE Static',
    description: 'Account Opening Portal',
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    theme_color: '#fff',
    background_color: '#fff',
    display: 'fullscreen',
    scope: '/',
    start_url: '/',
    orientation: 'landscape-primary',
    screenshots: [
      {
        src: '/images/1280x800-screenshot.png',
        sizes: '1280x800',
        type: 'image/png',
      },
      {
        src: '/images/750x1334-screenshot.png',
        sizes: '750x1334',
        type: 'image/png',
      },
    ],
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
    chunkSizeWarningLimit: 1024,
  },
})
