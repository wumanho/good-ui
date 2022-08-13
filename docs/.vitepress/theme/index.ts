import Theme from 'vitepress/theme'
import './demo-block.scss'
import '../../../src/index.scss'
import {registerComponents} from './register-components'
import GoodUI from '../../../src/index'
import type {App} from 'vue'
import {Tree} from "../../../src/components/tree";
import {Button} from "../../../src/components/Button";

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}:{app:App<never>}) {
    // 注册组件
    app.component('GTree',Tree)
    app.component('GButton',Button)
    registerComponents(app)
    app.use(GoodUI)
  }
}
