import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import '@/index.css';
import Project from '@/page/Project.vue'; // 我的项目
import Author from '@/page/Author.vue'; // 关于作者
import PdfViewer from '@/page/PdfViewer.vue';
import Hero from '@/components/hero/Hero.vue';

export default {
  ...DefaultTheme,
  Layout() {
    // 首页插槽
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(Hero)
      // "home-hero-after": () => h(SocialLink), // 为社交链接预留的插槽
    });
  },
  NotFound: () => 'custom 404', // 404 页面
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('Project', Project);
    app.component('Author', Author);
    app.component('PdfViewer', PdfViewer);
  },
  setup() {}
};
