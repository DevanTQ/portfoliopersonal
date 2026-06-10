import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://devandraelsyadam.netlify.app',
  integrations: [
    react(),
  ],
  output: 'static',
})