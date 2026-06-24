import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Web_Page_1/', // <--- CAMBIA ESTO por el nombre exacto de tu repo
})