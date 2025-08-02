// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const repoName='Portfolio';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})