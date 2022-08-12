import { ensureDirSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import { lightGreen } from 'kolorist'
import { genCoreTemplate } from '../template/core'
import { genTypeTemplate } from '../template/type'
import { genStyleTemplate } from '../template/style'
import { genTestTemplate } from '../template/test'
import { genIndexTemplate } from '../template'
import { ObjectEncodingOptions } from 'fs'

export interface createInfo {
  name: string
  title: string
  category: string
}

const WRITE_FILE_OPTIONS: ObjectEncodingOptions = { encoding: 'utf8' }

export function createComponent(info: createInfo) {
  const { name } = info
  const componentDir = resolve('../../src/components', name)
  const compSrcDir = resolve(componentDir, 'src')
  const styleDir = resolve(componentDir, 'style')
  const testDir = resolve(componentDir, 'test')
  // 创建文件夹
  ensureDirSync(compSrcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)
  // 输出模板内容到文件
  createCoreContent(compSrcDir, name)
  createTypeContent(compSrcDir, name)
  createStyleContent(styleDir, name)
  createTestContent(testDir, name)
  createIndexContent(componentDir, name)

  console.log(lightGreen(`✔️ ${name}创建成功`))
}

// .tsx 组件内容
function createCoreContent(compSrcDir: string, name: string) {
  const coreFilePath = resolve(compSrcDir, name + '.tsx')
  writeFileSync(coreFilePath, genCoreTemplate(name), WRITE_FILE_OPTIONS)
}

// .type 类型文件
function createTypeContent(compSrcDir: string, name: string) {
  const typeFilePath = resolve(compSrcDir, name + '-type.ts')
  writeFileSync(typeFilePath, genTypeTemplate(name), WRITE_FILE_OPTIONS)
}

// 样式文件
function createStyleContent(styleDir: string, name: string) {
  const styleFilePath = resolve(styleDir, name + '.scss')
  writeFileSync(styleFilePath, genStyleTemplate(name), WRITE_FILE_OPTIONS)
}

// 测试文件
function createTestContent(testDir: string, name: string) {
  const testFilePath = resolve(testDir, name + '.test.ts')
  writeFileSync(testFilePath, genTestTemplate(name), WRITE_FILE_OPTIONS)
}

// 出口文件
function createIndexContent(componentDir: string, name: string) {
  const indexFilePath = resolve(componentDir, 'index.ts')
  writeFileSync(indexFilePath, genIndexTemplate(name), WRITE_FILE_OPTIONS)
}
