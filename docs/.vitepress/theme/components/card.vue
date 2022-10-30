<template>
  <div class="items">
    <div class="item" v-for="item in list" :key="item.id">
      <div class="content" @click="link((item.logo))">
        <div class="logo">
          <img :src="'/'+(item.logo)+'.svg'" :alt="item.logo" />
        </div>
        <h2 class="name">{{item.name}}</h2>
        <p class="info">{{item.info}}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const list = reactive([
  {
    index: 0,
    logo: "html",
    name: "HTML",
    info: "超文本标记语言是一种用于创建网页的标准标记语言"
  },
  {
    index: 1,
    logo: "css",
    name: "CSS",
    info: "层叠样式表是一种用来为结构化文档添加样式的计算机语言"
  },
  {
    index: 2,
    logo: "javascript",
    name: "JavaScript",
    info: "JavaScript 是一种基于原型、多范式、单线程的动态语言"
  },
  {
    index: 3,
    logo: "vue",
    name: "Vue",
    info: "Vue是一款用于构建用户界面的 JavaScript 框架"
  },
  {
    index: 4,
    logo: "webpack",
    name: "构建工具",
    info: "构建工具是一个把源代码生成可执行应用程序的过程自动化的程序"
  },
  {
    index: 5,
    logo: "chrome",
    name: "浏览器原理",
    info: "网页浏览器是一种用于检索并展示万维网信息资源的应用程序"
  },
  {
    index: 6,
    logo: "network",
    name: "计算机网络",
    info: "TCP/IP 是指能够在多个不同网络间实现信息传输的协议簇"
  },
  {
    index: 7,
    logo: "datastructure",
    name: "数据结构与算法",
    info: "在计算机科学中，数据结构是计算机中存储、组织数据的方式"
  },
])
/* 控制路径跳转 */
const link = (param) => {
  window.location.href = window.location.href + "guide/article/" + param + "/test_article.html";;
};
</script>
<style scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  width: 100%;
  padding: 8px;
}

.content {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
}

.logo {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  width: 48px;
  height: 48px;
  font-size: 24px;
}

.name {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.info {
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

@media screen and (min-width: 640px) {
  .item {
    width: 50%;
  }
}

@media screen and (min-width: 960px) {
  .items {
    backface-visibility: hidden;
  }

  .item {
    width: 25%;
  }

  .content:hover {
    box-shadow: 0px 0px 30px rgba(204, 204, 204, 0.5);
  }
}
</style>
