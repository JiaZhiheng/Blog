import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'zh-CN',
  title: '前端工程师博客', // 网站标题
  description: 'Vite 和 Vue 支持的静态站点生成器', // 描述
  titleTemplate: 'Vite & Vue powered static site generator', // 标题的后缀
  base: '/Blog/',
  outDir: "../dist",
  head: [ // head标签
    ['link', { rel: 'icon', href: '/avatar.ico' }],
    ['link', { rel: 'apple-touch-icon-precomposed', href: '/logo.png', type: 'image/png' }],
  ],
  ignoreDeadLinks: true, // 忽略死链接
  themeConfig: {
    logo: '/avatar.png', // 头像
    siteTitle: '贾志恒', // 站点标题
    // 导航栏
    nav: [
      // { text: "工作", link: "/guide/work/a" },
      {
        text: "文章",
        items: [
          {
            text: 'HTML', link: "/guide/article/html/test_article"
          },
          {
            text: 'CSS', link: "/guide/article/css/test_article"
          }
        ]
      },
      {
        text: "项目", link: "/guide/project/project",

      },
      { text: "资料", link: "/guide/material/regularExpression" },

    ],
    // 侧边栏
    sidebar: {
      // 工作
      "/guide/work/": [
        {
          text: "工作中遇到的问题和对应解决方案",
          items: [
            {
              text: "MP3 转 M4A 的动画效果",
              link: "/guide/work/a",
            },
            {
              text: "揭开优惠券的动画效果",
              link: "/guide/work/b",
            },
            {
              text: "揭开优惠券的动画效果(第二种)",
              link: "/guide/work/c",
            },
            {
              text: "回到顶部的方法",
              link: "/guide/work/d",
            },
            {
              text: "涟漪效果",
              link: "/guide/work/e",
            },
            {
              text: "翻转效果",
              link: "/guide/work/f",
            },
            {
              text: "带进度条的音乐播放器",
              link: "/guide/work/g",
            },
            {
              text: "简易音乐播放器",
              link: "/guide/work/h",
            },
            {
              text: "英文邮件(邮件必须用行内样式)",
              link: "/guide/work/i",
            },
            {
              text: "日文邮件(邮件必须用行内样式)",
              link: "/guide/work/j",
            },
            {
              text: "使用 webp 格式的图片优化加载速度",
              link: "/guide/work/k",
            },
            {
              text: "好看的 hover 样式",
              link: "/guide/work/l",
            },
            {
              text: "实现打印功能",
              link: "/guide/work/m",
            },
            {
              text: "测试在 html 中引入 pdf 文件",
              link: "/guide/work/n",
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
    /* 大纲标题 */
    outlineTitle: '大纲',
    /* 社交链接 */
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JiaZhiheng' },
    ],
    /* 文档页脚 */
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: true
  },
})

