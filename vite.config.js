import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CICD_HOSPITAL_MANEGEMENT_DEPLOY', // or '/' depending on your routing and folder structure
  server: {
    proxy: {
      '/api': 'http://localhost:8091'
    }
  }
})


