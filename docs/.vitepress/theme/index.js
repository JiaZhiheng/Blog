import Theme from 'vitepress/theme'
import './index.css'
import VPHero from './VPHero.vue'
import Swiper from './swiper.vue'
import Author from './components/author.vue'

export default ({
  ...Theme,
  Layout: Swiper, // 插槽写法（在未来的某个版本可全部改用插槽写法，替换注册全局组件的方法）
  enhanceApp({ app }) { // 注册全局组件
    app.component('VPHero', VPHero);
    app.component('Author', Author);
  }
})



