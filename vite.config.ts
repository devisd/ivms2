import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(root, 'src/components'),
      '@data': path.resolve(root, 'src/data'),
      '@lib': path.resolve(root, 'src/lib'),
      '@pages': path.resolve(root, 'src/pages'),
      '@context': path.resolve(root, 'src/context'),
    },
  },
})
