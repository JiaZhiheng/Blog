import Theme from 'vitepress/theme'
import './index.css'
import VPHero from './VPHero.vue'
import Author from './components/author.vue'

export default ({
  ...Theme,
  enhanceApp({ app }) { // 注册全局组件
    app.component('VPHero', VPHero);
    app.component('Author', Author);
  }
})



