# 前端技术博客

## 后续更新计划

#### fix bug

页面长时间切出后轮播图层级混乱 => 找到定时器休眠方法

#### 代码优化

轮播图时间同步 => 父组件统一时间并传递给子组件、父组件若未传递则默认使用子组件时间

精简轮播图代码 =>
步骤：bem 命名规则 语义话代码<br/>
目标：封装轮播组件作为子组件<br/>
父组件传参指定相应参数:<br/>
arrow<br/>
dot-type<br/>
type： fade ｜ marquee ｜ slide<br/>
direction： horizontal ｜ vertical<br/>
number： x 数量<br/>
speed：xxxx ms 切换速度<br/>
immediate：true ｜ false 立即执行<br/>

抽离公共代码 carousel.js<br/>
页面跳转 keep alive 不重置轮播图（需查看效果）<br/>

#### 多端适配

移动端:仿照 appstore => 找到触控拖拽的方法<br/>
桌面端:水平轮播 hover 样式 => 挑选 hover 样式<br/>
| iPhone 12 Pro | iPad Pro 12.9 | MacBook Air M2 13.6 |iMac M1|
| :--: | :--: | :--: |:--:|
| 390 \* 844 | 1366 \* 1024 | 1710 \* 1112 |2240 \* 1260|

加社交链接 icon // 暂时搁置<br/>

#### 浏览器适配

研究 safari 无简历的问题

#### 检查

每月检查 pagespeed // 10 号<br/>
每周检查 algolia<br/>

#### 功能需求

添加分享工具

#### 内容更新

更新首页文案<br/>
资料内容改为 markdown 格式<br/>
《给产品经理讲技术》归纳整理<br/>
《大话设计模式》归纳整理<br/>

#### 分支结构

添加 Github 主页个人介绍<br/>
新建分支 develop (正式版 vitepress 上线后)<br/>

#### 作品更新

小菊记账<br/>
iOS 版<br/>
Android 版<br/>
小程序版<br/>
网页版<br/>

### 更新到最新版本
```sh [yarn]
yarn add vitepress@latest
```

### 文件目录
```bash
Blog
  ├─ .DS_Store
  ├─ .git
  ├─ .github
  ├─ .gitignore
  ├─ README.md
  ├─ cache
  ├─ dist
  ├─ docs
  │  ├─ .DS_Store
  │  ├─ .vitepress
  │  │  ├─ .DS_Store
  │  │  ├─ config.js
  │  │  └─ theme
  │  │     ├─ components
  │  │     │  ├─ Hero.vue
  │  │     │  └─ carousel
  │  │     │     ├─ CarouselFade.vue
  │  │     │     ├─ CarouselHorizontal.vue
  │  │     │     ├─ CarouselVertical.vue
  │  │     │     ├─ carousel.config.js
  │  │     │     ├─ carousel.css
  │  │     │     └─ carousel.js
  │  │     ├─ index.css
  │  │     ├─ index.js
  │  │     ├─ page
  │  │     │  ├─ Author.vue
  │  │     │  ├─ Linux.vue
  │  │     │  ├─ Project.vue
  │  │     │  └─ Regular.vue
  │  │     └─ util
  │  │        ├─ outlineTitlePlugin.js
  │  │        └─ sidebarGenerator.js
  │  ├─ cache
  │  ├─ code
  │  │  ├─ algorithm
  │  │  │  ├─ binary_search.js
  │  │  │  ├─ dynamic_programming.js
  │  │  │  └─ sliding_window.js
  │  │  ├─ sort
  │  │  │  ├─ bubble_sort.js
  │  │  │  └─ merge_sort.js
  │  │  └─ tree.js
  │  ├─ guide
  │  │  ├─ .DS_Store
  │  │  ├─ article
  │  │  │  ├─ .DS_Store
  │  │  │  ├─ 01-HTML
  │  │  │  │  └─ 01-Dialog 标签.md
  │  │  │  ├─ 02-CSS
  │  │  │  │  ├─ .DS_Store
  │  │  │  │  ├─ 01-CSS 命名规则.md
  │  │  │  │  ├─ 02-实现响应式网页的一些小技巧.md
  │  │  │  │  ├─ 03-如何设置网页字体响应式.md
  │  │  │  │  ├─ 04-实现响应式图片的方式.md
  │  │  │  │  ├─ 05-CSS变量的定义和使用方法.md
  │  │  │  │  └─ 06-响应式网页设计.md
  │  │  │  ├─ 03-JavaScript
  │  │  │  │  ├─ 01-TypeScript 入门.md
  │  │  │  │  ├─ 02-TypeScript 面向对象编程.md
  │  │  │  │  ├─ 03-TypeScript 面向对象特性之封装与抽象.md
  │  │  │  │  ├─ 04-TypeScript 面向对象特性之继承.md
  │  │  │  │  ├─ 05-TypeScript 面向对象特性之多态.md
  │  │  │  │  ├─ 10-JavaScript 数组最常用的 6 个方法.md
  │  │  │  │  ├─ Audio API 音频播放、录制和处理.md
  │  │  │  │  ├─ Clipboard API 剪切板读取和写入.md
  │  │  │  │  ├─ Cookie API.md
  │  │  │  │  ├─ Event Loop.md
  │  │  │  │  ├─ Location 对象操作.md
  │  │  │  │  └─ Navigator API 获取浏览器信息.md
  │  │  │  ├─ 04-Vue
  │  │  │  │  └─ 01-setup 语法糖.md
  │  │  │  ├─ 05-React
  │  │  │  │  └─ 01-如何使用 JSX 编写 React 组件.md
  │  │  │  ├─ 06-Node.js
  │  │  │  │  └─ 01-Epxress.js 快速入门.md
  │  │  │  ├─ 07-构建工具
  │  │  │  │  └─ 01-Vite 和 Webpack 的比较与区别.md
  │  │  │  ├─ 08-单元测试
  │  │  │  │  └─ Jest 初体验.md
  │  │  │  ├─ 09-设计模式
  │  │  │  │  └─ 01-简单工厂模式.md
  │  │  │  ├─ 10-计算机网络
  │  │  │  │  ├─ 01-HTTPS 原理.md
  │  │  │  │  └─ 02-HTTP 协议.md
  │  │  │  ├─ 11-浏览器原理
  │  │  │  │  ├─ 01-Window 对象的用法.md
  │  │  │  │  ├─ 02-浏览器的工作原理.md
  │  │  │  │  └─ 03-如何解决跨越问题.md
  │  │  │  └─ 12-数据结构与算法
  │  │  │     ├─ 01-栈.md
  │  │  │     ├─ 02-队列.md
  │  │  │     ├─ 03-链表.md
  │  │  │     ├─ 04-树.md
  │  │  │     ├─ 05-图.md
  │  │  │     ├─ 07-树的广度优先遍历.md
  │  │  │     ├─ 10-大 O 表示法.md
  │  │  │     ├─ 11-冒泡排序.md
  │  │  │     ├─ 15-归并排序.md
  │  │  │     ├─ 21-动态规划算法.md
  │  │  │     └─ 22-二分查找算法.md
  │  │  ├─ author.md
  │  │  ├─ material
  │  │  │  ├─ Linux.md
  │  │  │  ├─ material.md
  │  │  │  └─ regularExpression.md
  │  │  ├─ project
  │  │  │  └─ project.md
  │  │  ├─ project.md
  │  │  └─ work
  │  │     ├─ a.md
  │  │     ├─ b.md
  │  │     ├─ c.md
  │  │     ├─ d.md
  │  │     ├─ e.md
  │  │     ├─ f.md
  │  │     ├─ g.md
  │  │     ├─ h.md
  │  │     ├─ i.md
  │  │     ├─ j.md
  │  │     ├─ k.md
  │  │     ├─ l.md
  │  │     ├─ m.md
  │  │     └─ n.md
  │  ├─ index.md
  │  └─ public
  │     ├─ .DS_Store
  │     ├─ avatar.ico
  │     ├─ avatar.png
  │     ├─ document
  │     │  ├─ Linux速查备忘手册.pdf
  │     │  └─ 正则表达式速查备忘手册.pdf
  │     ├─ features
  │     │  ├─ chrome.svg
  │     │  ├─ computer-network.svg
  │     │  ├─ css.svg
  │     │  ├─ data-structure.svg
  │     │  ├─ design-pattern.svg
  │     │  ├─ html.svg
  │     │  ├─ javascript.svg
  │     │  ├─ node.svg
  │     │  ├─ react.svg
  │     │  ├─ unit-testing.svg
  │     │  ├─ vue.svg
  │     │  └─ webpack.svg
  │     ├─ home-hero-image.svg
  │     ├─ logo.png
  │     ├─ project
  │     │  ├─ 1.png
  │     │  ├─ 2.png
  │     │  ├─ 3.png
  │     │  └─ 4.png
  │     └─ 贾志恒-塔里木大学-网络工程.pdf
  ├─ node_modules
  ├─ package.json
  └─ yarn.lock
```