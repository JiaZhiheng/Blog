import path from 'path';
import { defineConfig } from 'vitepress';
import { generateSidebar } from './theme/util/sidebarGenerator'; // 基于文件目录生成 sidebar

export default defineConfig({
  /* Site Metadata 站点元数据 */
  title: '前端工程师博客', // 网站标题
  titleTemplate: 'Vite & Vue powered static site generator', // 标题的后缀
  description: 'Vite 和 Vue 支持的静态站点生成器', // 描述
  head: [
    // head 标签
    ['link', { rel: 'icon', href: '/Blog/avatar.ico' }],
    [
      'link',
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/Blog/logo.png',
        type: 'image/png'
      }
    ]
  ],
  lang: 'zh-CN', // 语言
  base: '/Blog/', // GitHub部署配置

  /* Routing 路由 */
  cleanUrls: true, // 清洁网址
  rewrites: {
    // URL 映射
    // 'source/:page': 'destination/:page'
  },

  /* Build 构建 */
  srcDir: './', // 源目录
  srcExclude: undefined, // 源目录排除
  outDir: '../dist', // 输出目录
  assetsDir: 'assets', // 静态资源目录
  cacheDir: '.././cache', // 缓存目录
  ignoreDeadLinks: true, // 忽略死链接
  mpa: false, // 多页面应用

  /* Theming 主题化 */
  appearance: true, // 是否开启深色模式
  lastUpdated: true, // 上次更新时间戳

  /* Customization 定制化 */
  markdown: {
    // 配置 Markdown 解析器选项
    theme: { light: 'github-light', dark: 'github-dark' }, // https://github.com/shikijs/shiki/blob/main/docs/themes.md
    lineNumbers: false,
    anchors: {
      slugify(str) {
        return encodeURIComponent(str);
      }
    }
  },
  vite: {
    // 配置 Vite
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'theme')
      }
    }
  },
  vue: {
    // 配置 Vue
    // @vitejs/plugin-vue options
  },

  /* Build Hooks 构建钩子 */
  // 构建结束
  async buildEnd(siteConfig) {},
  // 渲染后
  async postRender(context) {},
  // 转换头
  async transformHead(context) {},
  // 转换 HTML
  async transformHtml(code, id, context) {},
  // 转换页面数据
  async transformPageData(pageData) {},

  /* 默认主题配置 */
  themeConfig: {
    i18nRouting: false, // 国际化路由
    logo: '/avatar.png', // 头像
    siteTitle: '贾志恒', // 网站标题
    nav: [
      // 导航栏
      {
        text: '文章',
        link: '/guide/article/01-HTML/01-Dialog 标签'
      },
      // {
      // 	text: "项目",
      // 	link: "/guide/project/project",
      // },
      {
        text: '工作',
        link: '/guide/work/a'
      },
      { text: '资料', link: '/guide/material/regularExpression' }
    ],
    sidebar: {
      // 侧边栏
      '/guide/article/': generateSidebar('./docs/guide/article/', '/guide/article/'),
      // 项目
      '/guide/project/': [
        {
          text: '项目',
          items: [
            {
              text: '项目',
              link: '/guide/project/project'
            }
          ]
        }
      ],
      // 资料
      '/guide/material/': [
        {
          text: '正则表达式',
          items: [
            {
              text: '正则表达式',
              link: '/guide/material/regularExpression'
            }
          ]
        },
        {
          text: 'Linux',
          items: [
            {
              text: 'Linux',
              link: '/guide/material/Linux'
            }
          ]
        }
      ],
      // 工作
      '/guide/work/': [
        {
          text: '工作中遇到的问题和对应解决方案',
          items: [
            {
              text: 'MP3 转 M4A 的动画效果',
              link: '/guide/work/a'
            },
            {
              text: '揭开优惠券的动画效果',
              link: '/guide/work/b'
            },
            {
              text: '揭开优惠券的动画效果(第二种)',
              link: '/guide/work/c'
            },
            {
              text: '回到顶部的方法',
              link: '/guide/work/d'
            },
            {
              text: '涟漪效果',
              link: '/guide/work/e'
            },
            {
              text: '翻转效果',
              link: '/guide/work/f'
            },
            {
              text: '带进度条的音乐播放器',
              link: '/guide/work/g'
            },
            {
              text: '简易音乐播放器',
              link: '/guide/work/h'
            },
            {
              text: '英文邮件(邮件必须用行内样式)',
              link: '/guide/work/i'
            },
            {
              text: '日文邮件(邮件必须用行内样式)',
              link: '/guide/work/j'
            },
            {
              text: '使用 webp 格式的图片优化加载速度',
              link: '/guide/work/k'
            },
            {
              text: '好看的 hover 样式',
              link: '/guide/work/l'
            },
            {
              text: '实现打印功能',
              link: '/guide/work/m'
            },
            {
              text: '测试在 html 中引入 pdf 文件',
              link: '/guide/work/n'
            }
          ]
        }
      ]
    },
    aside: true, // 是否开启侧边栏
    outline: [2, 4], // 大纲
    outlineTitle: '大纲', // 大纲标题
    socialLinks: [
      // 社交链接
      { icon: 'github', link: 'https://github.com/JiaZhiheng' }
    ],
    // footer: { // 页脚
    // 	message: "Released under the MIT License.",
    // 	copyright: "Copyright © 2019-present Evan You",
    // },
    editLink: {
      // 编辑链接
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      // 最近更新时间
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      // 搜索
      provider: 'algolia',
      options: {
        // https://docsearch.algolia.com/docs/what-is-docsearch/
        appId: '80GWMAOJY7',
        apiKey: '38a0f8063ac54c4d32636029c465e6ad',
        indexName: 'jiazhihengio',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },
    // carbonAds: { // 广告
    // 	code: "",
    // 	placement: "",
    // },
    docFooter: {
      // 文档页脚
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: 'Appearance', // 暗模式开关标签
    sidebarMenuLabel: 'Menu', // 侧边栏菜单标签
    returnToTopLabel: 'Return to top', // 返回顶部标签
    langMenuLabel: 'Change language', // 语言菜单标签
    externalLinkIcon: false // 外部链接图标
  }
});
