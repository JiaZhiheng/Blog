import Theme from 'vitepress/theme'
import './style/index.css'
import Home from './components/home.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Home', Home)
  }
}

