import Theme from 'vitepress/theme'
import './index.css'
import Home from './home.vue'

export default ({
  ...Theme,
  enhanceApp({ app }) {
    app.component('Home', Home);
  },
})



