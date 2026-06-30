import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages 项目站点部署在 /Shujia/ 子路径下，
  // 构建时资源前缀用 '/Shujia/'；本地开发仍用 '/'，不影响预览。
  base: command === 'build' ? '/Shujia/' : '/',
}))
