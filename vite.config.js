import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export const baseURL = '/myblog/';

// https://vitejs.dev/config/
export default defineConfig({
  base:baseURL,
  plugins: [
    vue(),
  ]
})
