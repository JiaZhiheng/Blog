import Theme from 'vitepress/theme'
import './index.css'
import Home from './home.vue'
// import MyLayout from './MyLayout.vue'
import Swiper from './components/swiper.vue'

export default ({
  ...Theme,
  Layout: Swiper,
  // Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('Home', Home);
  }
})



