import { includesHelper } from '../utils'
import { green, red } from 'kolorist'
import { createComponent, createInfo } from './createComponent'

const inquirer = require('inquirer')

export interface Options {
  type: string
}

const OptionTypes = ['component', 'lib-entry'] as const
const DocsCategory = ['通用', '导航', '反馈', '数据录入', '数据展示'] as const

export async function handleAction(options: Options) {
  let { type } = options
  // 如果用户没有输入选项，进入命令行交互
  if (!type) {
    type = await handleOptionPrompt()
  }
  // 检查用户输入的类型
  type = await checkOptionValue(type)
  create(type)
}

async function checkOptionValue(type: string): Promise<string> {
  if (!includesHelper(OptionTypes, type)) {
    console.log(
      red(`目前支持支持创建类型: ${OptionTypes.join(',')}，请重新选择`)
    )
    type = await handleOptionPrompt()
  }
  return type
}

async function create(type: string) {
  switch (type) {
    case 'component':
      const info = await handleInfoPrompt()
      createComponent(info)
      break
    case 'lib-entry':
      console.log(green('lib-entry 生成仍在开发中... '))
      break
    default:
      throw new Error('不支持的')
  }
}

/**
 *  选择类型的弹出方法
 */
async function handleOptionPrompt(): Promise<string> {
  const result = await inquirer.prompt([
    {
      name: 'type',
      type: 'list',
      message: '(必填) 请选择需要创建的类型',
      choices: OptionTypes,
      default: 0 // 0 代表 choice 的第一项
    }
  ])
  return result.type
}

async function handleInfoPrompt(): Promise<createInfo> {
  const result = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: '(必填) 请输入组件名',
      validate: (value: string) => {
        if (value.trim() === '') {
          return '组件 name 不能为空'
        } else {
          return true
        }
      }
    },
    {
      name: 'title',
      type: 'input',
      message: '(必填) 请输入组件中文名称,用于文档展示',
      validate: (value: string) => {
        if (value.trim() === '') {
          return '组件 title 不能为空'
        } else {
          return true
        }
      }
    },
    {
      name: 'category',
      type: 'list',
      message: '(必填) 请选择组件的分类，用于文档展示',
      choices: DocsCategory,
      default: 0 // 0 代表 choice 的第一项
    }
  ])
  return result
}
