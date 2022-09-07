---
layout: home
title: Blog
titleTemplate: 技术博客

hero:
  name: Web Development
  text: 前端开发工程师的博客
  tagline: 敬请期待...
  image:
    src: /logo.svg
    alt: Vitepress
  actions:
    - theme: brand
      text: Get Started
      link: /guide/installation.html
    - theme: alt
      text: View on GitHub
      link: https://github.com/JiaZhiheng

features:
  - icon: ⚡️
    title: HTML
    details: 超文本标记语言 
  - icon: ⚡️
    title: CSS
    details: 层叠样式表
  - icon: ⚡️
    title: JavaScript
    details: 基于原型和头等函数的多范式高级解释型编程语言
  - icon: ⚡️
    title: Vue
    details: 渐进式 JavaScript 框架
  - icon: ⚡️
    title: 构建工具
    details: 敬请期待...
  - icon: ⚡️
    title: 浏览器原理
    details: 敬请期待...
  - icon: ⚡️
    title: 计算机网络
    details: 敬请期待...
  - icon: ⚡️
    title: 数据结构与算法
    details: 敬请期待...
---

<div v-is="'script'">
    var VPFeatures = document.getElementsByClassName('VPFeature');
    var icons = [ "/html.svg","/css.svg","/javascript.svg","/vue.svg","/webpack.svg","/chrome.svg","/network.svg","/datastructure.svg" ];
    VPFeatures = Array.from(VPFeatures);
    VPFeatures.forEach((item,index)=>{
      var icon = document.createElement("img");
      icon.src = icons[index];
      item.childNodes[0].innerHTML = "";
      item.childNodes[0].appendChild(icon);
      item.childNodes[0].style.backgroundColor = "transparent";
    });
</div>

