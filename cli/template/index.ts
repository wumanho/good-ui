import { upperFirst } from '../utils'

export function genIndexTemplate(name: string) {
  const compName = upperFirst(name)
  return `import { App } from 'vue'
import ${compName} from './src/${compName}'
import { installComponent } from '../install'
import type { GoodUIOptions } from '../_utils/global-config'

export { ${compName} }

export default {
  install(app: App, options?: GoodUIOptions) {
    installComponent(app, ${compName}, options)
  }
} 
`
}
