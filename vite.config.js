// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic'  // ← This is the key change
    })
  ],
  base: '/',  // Good as-is for custom domain
})