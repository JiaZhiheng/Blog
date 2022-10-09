<template>
  <div id="cards" class="items">
    <div class="item">
      <div class="content" @click="link('html')">
        <div class="icon">
          <img src="/html.svg" alt="html" />
        </div>
        <h2 class="title">HTML</h2>
        <p class="details">超文本标记语言是一种用于创建网页的标准标记语言</p>
      </div>
    </div>
    <div class="item">
      <div class="content" @click="link('css')">
        <div class="icon">
          <img src="/css.svg" alt="css" />
        </div>
        <h2 class="title">CSS</h2>
        <p class="details">
          层叠样式表是一种用来为结构化文档添加样式的计算机语言
        </p>
      </div>
    </div>
    <div class="item">
      <div class="content" @click="link('javascript')">
        <div class="icon">
          <img src="/javascript.svg" alt="javascript" />
        </div>
        <h2 class="title">JavaScript</h2>
        <p class="details">
          JavaScript 是一种基于原型、多范式、单线程的动态语言
        </p>
      </div>
    </div>
    <div class="item">
      <div class="content" @click="link('vue')">
        <div class="icon">
          <img src="/vue.svg" alt="vue" />
        </div>
        <h2 class="title">Vue</h2>
        <p class="details">Vue是一款用于构建用户界面的 JavaScript 框架</p>
      </div>
    </div>
    <div class="item">
      <div class="content" @click="link('webpack')">
        <div class="icon">
          <img src="/webpack.svg" alt="webpack" />
        </div>
        <h2 class="title">构建工具</h2>
        <p class="details">
          构建工具是一个把源代码生成可执行应用程序的过程自动化的程序
        </p>
      </div>
    </div>
    <div class="item">
      <div class="content" @click="link('chrome')">
        <div class="icon">
          <img src="/chrome.svg" alt="chrome" />
        </div>
        <h2 class="title">浏览器原理</h2>
        <p class="details">
          网页浏览器是一种用于检索并展示万维网信息资源的应用程序
        </p>
      </div>
    </div>
    <div class="item">
      <div class="content" @click="link('network')">
        <div class="icon">
          <img src="/network.svg" alt="network" />
        </div>
        <h2 class="title">计算机网络</h2>
        <p class="details">
          TCP/IP 是指能够在多个不同网络间实现信息传输的协议簇。
        </p>
      </div>
    </div>
    <div class="item">
      <div class="content" @click="link('datastructure')">
        <div class="icon">
          <img src="/datastructure.svg" alt="datastructure" />
        </div>
        <h2 class="title">数据结构与算法</h2>
        <p class="details">
          在计算机科学中，数据结构是计算机中存储、组织数据的方式
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import vertical from "./vertical.vue";
export default defineComponent({
  name: "horizontal",
  setup() {
    /* 控制路径跳转 */
    const link = (param) => {
      let url = window.location.href;
      url = url + "guide/article/" + param + "/test_article.html";
      window.location.href = url;
    };

    return {
      link,
    };
  },
});
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

.icon {
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

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.details {
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
