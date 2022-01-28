import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import ViteImages from 'vite-plugin-vue-images';
import vitePluginVue from './plugins/vue-custom-blocks-plugin';
const mdPlugin = require('vite-plugin-markdown');

export default defineConfig({
  base: './',
  plugins: [
    vue({
      script: {
        refTransform: true,
      },
    }),
    mdPlugin.plugin({
      mode: ['html', 'vue'],
    }),
    vitePluginVue,
    VueSetupExtend(),
    AutoImport({
      // 可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
     dts: 'src/auto-imports.d.ts',
     imports: ['vue']
    }),
    ViteImages({
      dirs: ['src/assets/img'] // 指明图片存放目录
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server: {
    open: true,
    port: 9000
  }
});
