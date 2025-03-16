import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      '3423-118-179-166-161.ngrok-free.app',  // Add your Ngrok URL here
      'localhost',  // You can also add localhost for local development
      '127.0.0.1'
    ],
  },
})
