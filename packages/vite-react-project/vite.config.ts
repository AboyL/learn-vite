import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { normalizePath } from 'vite';
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import path from 'path';
import autoprefixer from 'autoprefixer';
import windi from 'vite-plugin-windicss';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';

const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteEslint(),
    react({
      babel: {
        // "presets": ["@emotion/babel-preset-css-prop"],
        // 加入 babel 插件
        // 以下插件包都需要提前安装
        // 当然，通过这个配置你也可以添加其它的 Babel 插件
        plugins: [
          // 适配 emotion
          '@emotion/babel-plugin'
        ]
      },
      // 注意: 对于 emotion，需要单独加上这个配置
      // 通过 `@emotion/react` 包编译 emotion 中的特殊 jsx 语法
      jsxImportSource: '@emotion/react'
    }),
    windi(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: 'node_modules'
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
});
