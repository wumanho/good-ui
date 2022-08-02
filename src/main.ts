import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.scss'
import goodUI from '../dist/'

createApp(App).use(goodUI).mount('#app')
