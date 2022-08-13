import { App } from 'vue'
import Tree from './src/Tree'
import { installComponent } from '../../install'
import type { GoodUIOptions } from '../../_utils/global-config'

export { Tree }

export default {
  install(app: App, options?: GoodUIOptions) {
    installComponent(app, Tree, options)
  }
}
