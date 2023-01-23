import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://davijust.github.io/Servidor_M3/'
  plugins: [react()],
})
