import ButtonPlugin, { Button } from '../src/button'
import type { App } from 'vue'

// 导出组件
export { Button }
const plugins = [ButtonPlugin]
// 导出 vue 插件
export default {
  install(app: App) {
    plugins.forEach(plugin => {
      app.use(plugin)
    })
  }
}
