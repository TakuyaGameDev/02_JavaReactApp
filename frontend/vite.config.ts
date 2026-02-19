import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
    include: ['test/**/*.test.tsx'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage'
    },
  },

  server: {
    port: 5173,
    host: true, // DockerでもHMR効く
    open: true, // 起動時ブラウザ自動起動

    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
