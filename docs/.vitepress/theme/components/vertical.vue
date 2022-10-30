<template>
  <div class="ver">
    <div class="vertical">
      <div class="item" v-for="item in data.list" :key="item.index">
        <div class="background" style="background: #888">
          <h1 class="name">{{item.name}}</h1>
          <p class="info">{{item.info}}</p>
          <a class="url" :href="(item.url)" target="_blank">在线预览</a>
          <a class="source" :href="(item.source)" target="_blank">查看源码</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, onUnmounted } from "vue";

const data = reactive({
  list: [
    {
      idnex: 0,
      name:"项目A",
      info:"前端开发工程师",
      url:"http://101.43.140.74:64/",
      source:"https://github.com/JiaZhiheng",
    },
    {
      idnex: 0,
      name:"项目B",
      info:"后端开发工程师",
      url:"http://101.43.140.74:64/",
      source:"https://github.com/JiaZhiheng",
    },
    {
      idnex: 0,
      name:"项目C",
      info:"测试工程师",
      url:"http://101.43.140.74:64/",
      source:"https://github.com/JiaZhiheng",
    },
    {
      idnex: 0,
      name:"项目D",
      info:"数据分析工程师",
      url:"http://101.43.140.74:64/",
      source:"https://github.com/JiaZhiheng",
    },
  ],
  timeInter: null
})
// 组件挂载
onMounted(() => {
  const reflow = (element) => element.offsetHeight; // 返回元素的像素高度
  class vertical {
    /* 构造函数 */
    constructor(options) {
      const defaultOptions = {
        element: document.querySelector(".vertical"),
        height: "100%",
        index: 0,
        interval: 4000000,
      };
      this.options = Object.assign({}, defaultOptions, options); // 同名属性替换
      this.initHorizontal(); 
      this.playHorizontal(); 
    }

    /* 初始化轮播图 */
    initHorizontal() {
      this.initHorizontalContainer();    
      this.initHorizontalItemsAndDots(); 
    }

    /* 初始化轮播容器 */
    initHorizontalContainer() {
      this.container = this.options.element;
      this.container.style.height = this.options.height;
      const itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "items");
      this.itemContainer = itemContainer;
    }

    /* 初始化轮播图面板和轮播点面板 */
    initHorizontalItemsAndDots() {
      this.items = this.container.querySelectorAll(".item");
      this.items[this.options.index].classList.add("active-x");
      this.items[(this.options.index + 1) % this.items.length].classList.add("active-y");          
      this.items.forEach((item) => {
        this.itemContainer.appendChild(item);
      });         
      this.container.appendChild(this.itemContainer);          
    }

    /* 获取 上一项/当前项(X)/当前项(Y)/下一项 索引 */
    getPrevIndex() { return ((this.getCurrentXIndex() - 1 + this.items.length) % this.items.length)};
    getCurrentXIndex() { return [...this.items].indexOf(this.container.querySelector(".item.active-x"))};
    getCurrentYIndex() { return [...this.items].indexOf(this.container.querySelector(".item.active-y"))};
    getNextIndex() { return (this.getCurrentYIndex() + 1) % this.items.length};

    /* 开始轮播 */
    playHorizontal() {
      data.timeInter = setInterval(() => {
        this.setHorizontal(
          this.getPrevIndex(),     
          this.getCurrentXIndex(), 
          this.getCurrentYIndex(),
          this.getNextIndex(),    
        );
      }, this.options.interval);
    }
    
    /* 设置轮播图 */
    setHorizontal(fromIndex, currentXIndex, currentYIndex, toIndex) { 
      if (!this.isAnimate) {
        this.isAnimate = true;
        this.from = this.items[fromIndex];       
        this.currentX = this.items[currentXIndex]; 
        this.currentY = this.items[currentYIndex]; 
        this.to = this.items[toIndex];           
        this.setHorizontalItem();
      }
    }

    /* 设置轮播面板 */
    setHorizontalItem() {
      this.to.setAttribute("class", `item next`); // 这两行代码可以使页面平滑过渡
      reflow(this.to);                                     // 这两行代码可以使页面平滑过渡(尚不知道原因)
      this.from.setAttribute("class",`item prev`);
      this.currentX.setAttribute("class",`item active-x`);
      this.currentY.setAttribute("class",`item active-y`);
      this.to.setAttribute("class",`item next`);
      this.resetHorizontalItem();
    }

    /* 重置轮播面板 */
    resetHorizontalItem() {
      const callback = () => {
        this.from.setAttribute("class", "item");
        this.currentX.setAttribute("class", "item prev");
        this.currentY.setAttribute("class", "item active-x");
        this.to.setAttribute("class", "item active-y");
        this.from.removeEventListener("transitionend", callback, false); // 移除监听过渡事件
        this.isAnimate = false; // 防抖，没有这个变量的话会反复触发setHorizontal()函数
      };
      this.from.addEventListener("transitionend", callback(), false); // 设置监听过渡事件
    }
  }

  /* 声明轮播图 */
  new vertical();
});

// 组件卸载
onUnmounted(() => {
  clearInterval(data.timeInter);
  data.timeInter = null
});
 
</script>
<style scoped>
.ver {
  flex: 1;
  height: 100%;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}
.vertical {
  padding: 8px;
  position: relative;
}
.background {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.url {
  color: #409EFF
}
.source {
  color: #409EFF
}
.name {
  color: #fff
}
.info {
  color: #fff
}
.items {
  height: 100%;
  overflow: hidden;
}
.item {
  display: none;
  position: absolute;
  width: calc(100% - 16px);
  height: calc(50% - 4px);
  transition: all .3s;
  background-color: transparent;
}
.item.active-x,
.item.active-y,
.item.next,
.item.prev {
  display: block;
}
/* 上一页 */
.item.prev {   
  transform: translateY(calc(-100% - 16px));
}
/* 当前页 */
.item.active-x {
  transform: translateY(0);
}
.item.active-y {
  transform: translateY(calc(100% + 16px));
}
/* 下一页 */
.item.next {
  transform: translateY(calc(200% + 32px));
}
</style>