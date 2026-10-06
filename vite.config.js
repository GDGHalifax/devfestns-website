import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import packageJson from './package.json' with { type: 'json' }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './vitest.setup.js',
    coverage: {
      reporter: ['text', 'html', 'clover', 'json', 'lcov'],
      exclude: ['src/main.jsx', 'eslint.config.js', 'postcss.config.js', 'tailwind.config.js', 'vite.config.js', 'vitest.setup.js'],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100
      }
    }
  },
})
