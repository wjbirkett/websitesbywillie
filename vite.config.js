import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

let prerender
try {
  const mod = await import('vite-plugin-prerender')
  const VitePluginPrerender = mod.default || mod.VitePluginPrerender
  const PuppeteerRenderer = mod.PuppeteerRenderer
  if (VitePluginPrerender && PuppeteerRenderer) {
    prerender = VitePluginPrerender({
      staticDir: resolve(__dirname, 'dist'),
      routes: ['/'],
      renderer: new PuppeteerRenderer(),
    })
  }
} catch (e) {
  console.warn('vite-plugin-prerender not available, skipping pre-rendering')
}

export default defineConfig({
  plugins: [react(), prerender].filter(Boolean),
})
