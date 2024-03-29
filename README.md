# 前端技术博客

## 后续更新计划

#### 多端适配

移动端:仿照 appstore => 找到触控拖拽的方法<br/> 桌面端:水平轮播 hover 样式 => 挑选 hover 样式<br/> | iPhone 12 Pro | iPad Pro 12.9 | MacBook Air M2 13.6 |iMac M1| | :--: | :--: | :--: |:--:| | 390 \* 844 | 1366 \* 1024 | 1710 \* 1112 |2240 \* 1260|

加社交链接 icon // 暂时搁置<br/>

#### 检查

每月检查 pagespeed // 10 号<br/> 每周检查 algolia<br/>

#### 功能需求

添加分享工具

#### 内容更新

更新首页文案<br/> 资料内容改为 markdown 格式<br/> 《给产品经理讲技术》归纳整理<br/> 《大话设计模式》归纳整理<br/>

#### 分支结构

添加 Github 主页个人介绍<br/> 新建分支 develop (正式版 vitepress 上线后)<br/>

#### 作品更新

轮播图组件<br/> 小菊记账<br/> iOS 版<br/> Android 版<br/> 小程序版<br/> 网页版<br/>

### Node.js 版本

```sh
v20.0.0
```

### 安装依赖

```sh [yarn]
yarn install
```

### 运行项目

```sh [yarn]
yarn docs:dev
```

### 更新到最新版本

```sh [yarn]
yarn add vitepress@latest
```

### 更新所有依赖

```sh [yarn]
yarn upgrade
```

### 文件目录

```bash
Blog
 ├─ 📁 .git
 ├─ 📁 .github
 ├─ 📁 cache
 ├─ 📁 dist
 ├─ 📁 docs
 │  ├─ 📁 .vitepress
 │  │  ├─ 📁 theme
 │  │  │  ├─ 📁 components
 │  │  │  │  ├─ 📁 card
 │  │  │  │  └─ 📁 hero
 │  │  │  ├─ 📁 page
 │  │  │  ├─ 📁 util
 │  │  │  ├─ 📄 index.css
 │  │  │  └─ 📄 index.js
 │  │  └─ 📄 config.js
 │  ├─ 📁 code
 │  │  ├─ 📁 algorithm
 │  │  ├─ 📁 sort
 │  │  └─ 📄 generate_directory_tree.js
 │  ├─ 📁 guide
 │  │  ├─ 📁 article
 │  │  │  ├─ 📁 01-HTML
 │  │  │  ├─ 📁 02-CSS
 │  │  │  ├─ 📁 03-JavaScript
 │  │  │  ├─ 📁 04-Vue
 │  │  │  ├─ 📁 05-React
 │  │  │  ├─ 📁 06-Node.js
 │  │  │  ├─ 📁 07-构建工具
 │  │  │  ├─ 📁 08-单元测试
 │  │  │  ├─ 📁 09-设计模式
 │  │  │  ├─ 📁 10-计算机网络
 │  │  │  ├─ 📁 11-浏览器原理
 │  │  │  └─ 📁 12-数据结构与算法
 │  │  ├─ 📁 material
 │  │  ├─ 📁 project
 │  │  ├─ 📁 work
 │  │  ├─ 📄 author.md
 │  │  └─ 📄 project.md
 │  ├─ 📁 public
 │  │  ├─ 📁 document
 │  │  ├─ 📁 features
 │  │  ├─ 📁 project
 │  │  ├─ 📄 avatar.ico
 │  │  ├─ 📄 avatar.png
 │  │  ├─ 📄 home-hero-image.svg
 │  │  ├─ 📄 logo.png
 │  │  └─ 📄 贾志恒-塔里木大学-网络工程.pdf
 │  └─ 📄 index.md
 ├─ 📁 node_modules
 ├─ 📄 .gitignore
 ├─ 📄 README.md
 ├─ 📄 package.json
 └─ 📄 yarn.lock
```
