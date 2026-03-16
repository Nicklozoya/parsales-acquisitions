import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Root path is correct for the custom domain (parsaleacquisitions.com)
  // and works with the GitHub Pages subpath when combined with the Router basename logic.
  base: '/',
})