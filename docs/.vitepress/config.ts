import { defineConfig } from 'vitepress'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/', items: [] },
    {
      text: '通用',
      items: [{ text: 'Button 按钮', link: '/components/button/' }]
    },
    { text: '导航', items: [] },
    { text: '反馈', items: [] },
    { text: '数据录入', items: []},
    { text: '数据展示', items: [
        { text: 'Tree 树', link: '/components/tree/' }
      ] },
    { text: '布局', items:[]}
  ]
}

export default defineConfig({
  themeConfig: {
    sidebar,
    nav: [
      { text: '向导', link: '/guide' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wumanho/good-ui' }
    ]
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'scss'
      })
    }
  }
})
