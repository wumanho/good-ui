/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [vue(), jsx({})],
  test: {
    globals: true,
    environment: 'happy-dom', // dom 环境模拟
    transformMode: {
      // tsx
      web: [/.[tj]sx$/]
    }
  }
})
