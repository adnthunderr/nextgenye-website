import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/nextgenye-website/",
  server: {
    host: "127.0.0.1",
  },
  plugins: [react()],
})
