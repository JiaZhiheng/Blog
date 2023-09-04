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
   │  │     │  ├─ card
   │  │     │  ├─ carousel
   │  │     │  └─ hero
   │  │     ├─ index.css
   │  │     ├─ index.js
   │  │     ├─ page
   │  │     └─ util
   │  ├─ code
   │  │  ├─ algorithm
   │  │  ├─ generate_directory_tree.js
   │  │  └─ sort
   │  ├─ guide
   │  │  ├─ .DS_Store
   │  │  ├─ article
   │  │  │  ├─ .DS_Store
   │  │  │  ├─ 01-HTML
   │  │  │  ├─ 02-CSS
   │  │  │  ├─ 03-JavaScript
   │  │  │  ├─ 04-Vue
   │  │  │  ├─ 05-React
   │  │  │  ├─ 06-Node.js
   │  │  │  ├─ 07-构建工具
   │  │  │  ├─ 08-单元测试
   │  │  │  ├─ 09-设计模式
   │  │  │  ├─ 10-计算机网络
   │  │  │  ├─ 11-浏览器原理
   │  │  │  └─ 12-数据结构与算法
   │  │  ├─ author.md
   │  │  ├─ material
   │  │  ├─ project
   │  │  ├─ project.md
   │  │  └─ work
   │  ├─ index.md
   │  └─ public
   │     ├─ .DS_Store
   │     ├─ avatar.ico
   │     ├─ avatar.png
   │     ├─ document
   │     ├─ features
   │     ├─ home-hero-image.svg
   │     ├─ logo.png
   │     ├─ project
   │     └─ 贾志恒-塔里木大学-网络工程.pdf
   ├─ node_modules
   ├─ package.json
   └─ yarn.lock
```
