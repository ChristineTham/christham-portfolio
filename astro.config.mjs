import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: true,
    },
  },
  site: 'https://portfolio.christham.net',
})
