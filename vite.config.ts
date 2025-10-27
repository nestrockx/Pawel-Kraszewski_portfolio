import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import Components from 'unplugin-vue-components/vite'
import MotionResolver from 'motion-v/resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [MotionResolver()],
    }),
    tailwindcss(),
    svgLoader(),
  ],
})
