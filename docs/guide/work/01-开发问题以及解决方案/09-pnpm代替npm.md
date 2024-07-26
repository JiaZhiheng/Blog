pnpm 的官方文档是这样说的:
Fast, disk space efficient package manager;
因此，pnpm 本质上就是一个包管理器，这一点跟 npm/yarn 没有区别，但它作为杀手锏的两个优势在于:
- 包安装速度极快;
- 磁盘空间利用非常高效;
pnpm 是 npm 的替代品。pnpm 使用起来十分简单，如果之前有 npm/yarn 的使用经验，甚至可以无缝迁移到 pnpm 上来，它遵循与 npm 相同的原则，但它具有一些附加功能，使其比其前身更强大。

---
项目集成
一.pnpm安装
npm i -g pnpm
二.依赖安装
- npm项目转pnpm
1. pnpm import 从另一个软件包管理器的 lock 文件生成 pnpm-lock.yaml,与原有项目配置统一，执行后项目中会多出一个 pnpm-lock.yaml
注意：angular 项目 npm 升级成 pnpm 后 需要在 angular.json 中设置 cli.packageManager 值为 pnpm
2. 成功后 删除 node_modules 与 package-lock.json 文件后安装依赖
1. pnpm import
pnpm install
- 新项目
- pnpm install
补充
使用独立脚本安装（保障不同node版本下的pnpm版本相同）
Windows
使用 PowerShell：
iwr https://get.pnpm.io/install.ps1 -useb | iex
Mac
使用 HomeBrew 安装
brew install pnpm

---
幽灵依赖问题
“幽灵依赖” 就是：未在项目 package.json 中声明的依赖，但在项目中依然可以意外的被正确引用。
原因就是 npm v5 只后，把所有的依赖全部拍平整理到项目的 node_modules 之中，才导致了上面说的这种情况。（yarn 也一样，都存在幽灵依赖）
解决方法：
1.在pnpm install安装依赖之前在.npmrc文件中加入
shamefully-hoist=true //创建一个半严格的node_modeuls
hoist=true //所有依赖项都被提升到 node_modules/.pnpm
不推荐，失去了pnpm的特性
2.将存在非法访问幽灵依赖引用的包重新 pnpm install package-name（注意版本信息!!）添加到package.json文件中
例如
[图片]

pnpm install @ant-design/icons-angular@13.1.0

---
中文文档：https://pnpm.io/zh/motivation
推荐文章：https://juejin.cn/post/6932046455733485575
推荐文章：https://zhuanlan.zhihu.com/p/546400909