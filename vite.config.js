import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages if repo is not username.github.io
  // Change to your repo name, e.g. base: '/parsales-website/'
  base: '/Website/',
})
