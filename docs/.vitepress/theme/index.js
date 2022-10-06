import Theme from 'vitepress/theme'
import './style/index.css'
import Home from './components/home.vue'

import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';



export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Home', Home);
    app.use(TDesign);
  }
}