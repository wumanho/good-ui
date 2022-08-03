// 引入 vite 导出的 build 方法
const {defineConfig, build} = require('vite')
const vueJsxPlugin = require('@vitejs/plugin-vue-jsx')
const vue = require('@vitejs/plugin-vue')
const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsxPlugin()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

const entryFile = path.resolve(__dirname, './entry.ts')
const outputDir = path.resolve(__dirname, '../dist')
const componentsDir = path.resolve(__dirname, '../src/components')

const createPackageJson = (name) => {
  const fileStr = `{
    "name": "${name ? name : 'good-ui'}",
    "version": "0.0.0",
    "main": "${name ? 'index.umd.js' : 'good-ui.umd.js'}",
    "module": "${name ? 'index.js' : 'good-ui.es.js'}",
    "author": "WUMANHO",
    "github": "",
    "repository": {
      "type": "git",
      "url": "wumanho/good-ui"
    },
    "license": "ISC"
  }`
  if (name) {
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}

const buildOneConfig = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
  createPackageJson(name)
}

const buildOne = () => {
  fs.readdirSync(componentsDir)
    .filter(name => {
      // 过滤组件目录：只要目录不要文件，且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildOneConfig(name)
    })
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
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  createPackageJson()
}

const buildPak = async () => {
  await buildAll()
  buildOne()
}

buildPak()
