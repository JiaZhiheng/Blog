import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vitepress-Blog', // 网站标题
  themeConfig: {
    logo: '/avatar.png', // 头像
    siteTitle: '爱搞事的跳跳虎', // 站点标题
    socialLinks: [ // 链接
      { icon: 'github', link: 'https://github.com/JiaZhiheng' }
    ],
    // 导航栏
    nav: [
      { text:"工作", link: "/guide/work/work" },
      { text:"文章", link: "/guide/article/article" },
      { text:"资料", link: "/guide/material/material" },
      { text:"项目", link: "/guide/project/project" },
    ],
    // 侧边栏
    sidebar: {
      // 工作
      "/guide/work/": [
        {
          text: "Coupon",
          items: [
            {
              text: "Coupon",
              link: "/guide/work/coupon/Coupon",
            },
          ],
        },
        {
          text: "Hiappo",
          items: [
            {
              text: "Hiappo",
              link: "/guide/work/hiappo/Hiappo",
            },
          ],
        },
        {
          text: "Astro",
          items: [
            {
              text: "Astro",
              link: "/guide/work/astro/Astro",
            },
          ],
        },
      ],
      // 文章
      "/guide/article/": [
        {
          text: "HTML",
          items: [
            {
              text: "HTML",
              link: "/guide/article/html/test_article",
            },
          ],
        },
        {
          text: "CSS",
          items: [
            {
              text: "CSS",
              link: "/guide/article/css/test_article",
            },
          ],
        },
        {
          text: "JavaScript",
          items: [
            {
              text: "JavaScript",
              link: "/guide/article/javascript/test_article",
            },
          ],
        },
        {
          text: "Vue",
          items: [
            {
              text: "Vue",
              link: "/guide/article/vue/test_article",
            },
          ],
        },
        {
          text: "前端工程化",
          items: [
            {
              text: "前端工程化",
              link: "/guide/article/webpack/test_article",
            },
          ],
        },
        {
          text: "浏览器原理",
          items: [
            {
              text: "浏览器原理",
              link: "/guide/article/chrome/test_article",
            },
          ],
        },
        {
          text: "计算机网络",
          items: [
            {
              text: "计算机网络",
              link: "/guide/article/network/test_article",
            },
          ],
        },
        {
          text: "数据结构与算法",
          items: [
            {
              text: "数据结构与算法",
              link: "/guide/article/datastructure/test_article",
            },
          ],
        },
      ],
      // 资料
      "/guide/material/": [
        {
          text: "正则表达式",
          items: [
            {
              text: "正则表达式",
              link: "/guide/material/regularExpression",
            },
          ],
        },
        {
          text: "Linux",
          items: [
            {
              text: "Linux",
              link: "/guide/material/Linux",
            },
          ],
        },
      ],
      // 项目
      "/guide/project/": [
        {
          text: "项目",
          items: [
            {
              text: "项目",
              link: "/guide/project/project",
            },
          ],
        },
      ],
    },
    /* 页脚 */
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },   
  },
})

