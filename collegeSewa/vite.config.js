import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // ✅ Important: allows access via IP
    port: 5173,         // optional: set your custom port
  },
})
