// 引入 vite 导出的 build 方法
const { defineConfig, build } = require('vite')
const vueJsxPlugin = require('@vitejs/plugin-vue-jsx')
const vue = require('@vitejs/plugin-vue')
const path = require('path')
const fsExtra = require('fs-extra')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsxPlugin()]
})

const entryFile = path.resolve(__dirname, './entry.ts')
const outputDir = path.resolve(__dirname, '../dist')

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

const createPackageJson = () => {
  const fileStr = `{
    "name": "good-ui",
    "version": "0.0.0",
    "main": "good-ui.cjs",
    "module": "good-ui.js",
    "author": "WUMANHO",
    "github": "",
    "repository": {
      "type": "git",
      "url": "wumanho/good-ui"
    },
    "license": "ISC"
  }`

  fsExtra.outputFile(
    path.resolve(outputDir, 'package.json'),
    fileStr,
    'utf-8'
  )
}

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'good-ui',
          fileName: 'good-ui',
          formats: ['es', 'cjs']
        },
        outDir: outputDir
      }
    })
  )
  createPackageJson()
}

const buildPak = async () => {
  await buildAll()
}

buildPak()
