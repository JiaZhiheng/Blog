import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vitepress-Blog', // 网站标题
  themeConfig: {
    logo: '/avatar.png', // 头像
    siteTitle: 'JiaZhiheng', // 站点标题
    socialLinks: [ // 链接
      { icon: 'github', link: 'https://github.com/JiaZhiheng' }
    ],
    // 导航栏
    nav: [
      { text:"工作", link: "/guide/work/work" },
      { text:"文章", link: "/guide/article/test_article1" },
      { text:"资料", link: "/guide/material/regularExpression" }
    ],
    // 侧边栏
    sidebar: {
      // 作品
      "/guide/work/": [
        {
          text: "Coupon",
          items: [
            {
              text: "测试文章1",
              link: "/guide/wrok/work.md",
            },
          ],
        },
        {
          text: "Hiappo",
          items: [
            {
              text: "测试文章1",
              link: "/guide/wrok/work.md",
            },
          ],
        },
        {
          text: "Astro",
          items: [
            {
              text: "测试文章1",
              link: "/guide/wrok/work.md",
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
              text: "测试文章1",
              link: "/guide/article/test_article1",
            },
          ],
        },
        {
          text: "CSS",
          items: [
            {
              text: "测试文章2",
              link: "/guide/article/test_article2",
            },
          ],
        },
        {
          text: "JavaScript",
          items: [
            {
              text: "测试文章3",
              link: "/guide/article/test_article3",
            },
          ],
        },
        {
          text: "Vue",
          items: [
            {
              text: "测试文章4",
              link: "/guide/article/test_article4",
            },
          ],
        },
        {
          text: "前端工程化",
          items: [
            {
              text: "测试文章5",
              link: "/guide/article/test_article5",
            },
          ],
        },
        {
          text: "浏览器原理",
          items: [
            {
              text: "测试文章6",
              link: "/guide/article/test_article6",
            },
          ],
        },
        {
          text: "计算机网络",
          items: [
            {
              text: "测试文章7",
              link: "/guide/article/test_article7",
            },
          ],
        },
        {
          text: "数据结构与算法",
          items: [
            {
              text: "测试文章8",
              link: "/guide/article/test_article8",
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
      ]
    },
    /* 页脚 */
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },
})

