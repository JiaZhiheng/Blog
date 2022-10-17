<template>
  <div class="swiper-horizontal">
    <div class="horizontal">
      <div class="horizontal-item">
        <div class="demo-item" style="background: #4586f3"></div>
      </div>
      <div class="horizontal-item">
        <div class="demo-item" style="background: #eb4334"></div>
      </div>
      <div class="horizontal-item">
        <div class="demo-item" style="background: #fbbd06"></div>
      </div>
      <div class="horizontal-item">
        <div class="demo-item" style="background: #35aa53"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "horizontal",
  setup() {
    onMounted(() => {
      const reflow = (element) => element.offsetHeight;
      class Horizontal {
        constructor(options) {
          const defaultOptions = {
            element: null,
            height: 0,
            index: 0,
            autoplay: true,
            interval: 4000,
          };
          this.options = Object.assign({}, defaultOptions, options);
          this.initHorizontal(); // 初始化轮播图
          this.bindHorizontal(); // 绑定轮播图
          this.playHorizontal(); // 播放轮播图
        }

        /* 初始化轮播图 */
        initHorizontal() {
          this.timer = null;
          let key = null;
          this.options.element.getAttributeNames().forEach((attrbute)=>{if(attrbute.indexOf("data-v") != -1){key = attrbute;}}); // 使新增的 dom 全部添加 data-v 属性
          this.initHorizontalContainer(key);     // 初始化轮播容器
          this.initHorizontalItemsAndDots(key); // 初始化轮播面板和轮播点
          this.initHorizontalArrows(key);        // 初始化轮播箭头
        }

        /* 初始化轮播容器 */
        initHorizontalContainer(key) {
          this.container = this.options.element;
          this.container.style.height = this.options.height;
          const itemContainer = document.createElement("div");
          itemContainer.setAttribute("class", "horizontal-items");
          itemContainer.setAttribute(key, "");
          this.itemContainer = itemContainer;
          const dotsContainer = document.createElement("ul");
          dotsContainer.setAttribute("class", "horizontal-dots");
          dotsContainer.setAttribute(key, "");
          this.dotsContainer = dotsContainer;
        }

        /* 初始化轮播图面板和轮播点面板 */
        initHorizontalItemsAndDots(key) {
          this.items = this.container.querySelectorAll(".horizontal-item");
          this.items[this.options.index].classList.add("active");
          this.items.forEach((item) => {
            this.itemContainer.appendChild(item);
            this.dotsContainer.appendChild(this.initHorizontalDot(key));
          });
          this.container.appendChild(this.itemContainer);
          this.container.appendChild(this.dotsContainer);
          this.dots = this.container.querySelectorAll(".horizontal-dot");
          this.dots[this.options.index].classList.add("active");
        }

        /* 初始化轮播箭头 */
        initHorizontalArrows(key) {
          const arrowContainer = document.createElement("div");
          arrowContainer.setAttribute("class", "horizontal-arrows");
          arrowContainer.setAttribute(key, "");
          const arrowPrev = document.createElement("button");
          const arrowNext = document.createElement("button");
          arrowPrev.setAttribute("class", "horizontal-arrow arrow-prev");
          arrowPrev.setAttribute(key, "");
          arrowNext.setAttribute("class", "horizontal-arrow arrow-next");
          arrowNext.setAttribute(key, "");
          arrowPrev.innerHTML = `<svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5397 3.53998L10.4589 4.45922L6.91856 7.9996L10.4589 11.54L9.5397 12.4592L5.08008 7.9996L9.5397 3.53998Z" fill="#fff" fill-opacity="0.9"></path></svg>`;
          arrowNext.innerHTML = `<svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.4603 12.4592L5.54106 11.54L9.08144 7.99961L5.54106 4.45923L6.4603 3.53999L10.9199 7.99961L6.4603 12.4592Z" fill="#fff" fill-opacity="0.9"></path></svg>`;
          arrowContainer.appendChild(arrowPrev);
          arrowContainer.appendChild(arrowNext);
          this.container.appendChild(arrowContainer);
        }

        /* 初始化轮播点 */
        initHorizontalDot(key) {
          const dot = document.createElement("li");
          dot.setAttribute("class", "horizontal-dot");
          dot.setAttribute(key, "");
          return dot;
        }

        /* 绑定轮播图 */
        bindHorizontal() {
          this.bindHorizontalArrow(); // 绑定轮播箭头
          this.bindHorizontalDots(); // 绑定轮播点面板
          // this.bindHorizontalContainer() // 绑定鼠标事件
        }

        /* 绑定轮播箭头 */
        bindHorizontalArrow() {
          const arrowPrev = this.container.querySelector(".arrow-prev");
          const arrowNext = this.container.querySelector(".arrow-next");
          arrowPrev.addEventListener("click", () => {
            this.setHorizontal(
              this.getCurrentIndex(),
              this.getPrevIndex(),
              "right"
            );
          });
          arrowNext.addEventListener("click", () => {
            this.setHorizontal(
              this.getCurrentIndex(),
              this.getNextIndex(),
              "left"
            );
          });
        }

        /* 绑定轮播点面板 */
        bindHorizontalDots() {
          this.dots.forEach((horizontalDot) => {
            horizontalDot.addEventListener("click", (e) => {
              const fromIndex = this.getCurrentIndex();
              const toIndex = [...this.dots].indexOf(e.target);
              if (fromIndex !== toIndex) {
                const direction = fromIndex > toIndex ? "right" : "left";
                this.setHorizontal(fromIndex, toIndex, direction);
              }
            });
          });
        }

        /* 鼠标移入/移出轮播容器暂停/开始轮播 */
        // bindHorizontalContainer() {
        //     if (this.options.autoplay) {
        //         this.container.addEventListener('mouseenter', () => {
        //             this.pauseHorizontal()
        //         })
        //         this.container.addEventListener('mouseleave', () => {
        //             this.playHorizontal()
        //         })
        //     }
        // }
        
        // 设置轮播图
        setHorizontal(fromIndex, toIndex, direction) {
          if (!this.isAnimate) {
            this.isAnimate = true;
            this.from = this.items[fromIndex];
            this.to = this.items[toIndex];
            this.direction = direction;
            this.setHorizontalDot(toIndex);
            this.setHorizontalItem();
          }
        }

        // 获取当前索引
        getCurrentIndex() {
          return [...this.dots].indexOf(
            this.container.querySelector(".horizontal-dot.active")
          );
        }

        // 获取上一个索引
        getPrevIndex() {
          return (
            (this.getCurrentIndex() - 1 + this.dots.length) %
            this.dots.length
          );
        }

        // 获取下一个索引
        getNextIndex() {
          return (this.getCurrentIndex() + 1) % this.dots.length;
        }

        // 设置轮播面板
        setHorizontalItem() {
          const type = this.direction === "left" ? "next" : "prev";
          this.to.setAttribute("class", `horizontal-item ${type}`);
          reflow(this.to);
          this.from.setAttribute(
            "class",
            `horizontal-item active ${this.direction}`
          );
          this.to.setAttribute(
            "class",
            `horizontal-item ${type} ${this.direction}`
          );
          this.resetHorizontalItem();
        }

        // 重置轮播面板
        resetHorizontalItem() {
          const callback = () => {
            this.from.setAttribute("class", "horizontal-item");
            this.to.setAttribute("class", "horizontal-item active");
            this.from.removeEventListener("transitionend", callback, false);
            this.isAnimate = false;
          };
          this.from.addEventListener("transitionend", callback, false);
        }

        // 设置轮播点
        setHorizontalDot(index) {
          this.dots.forEach((horizontalDot) =>
            horizontalDot.classList.remove("active")
          );
          this.dots[index].classList.add("active");
        }
        
        // 暂停轮播
        pauseHorizontal() {
          if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
          }
        }

        // 开始轮播
        playHorizontal() {
          if (this.options.autoplay && !this.timer) {
            this.timer = setInterval(() => {
              this.setHorizontal(
                this.getCurrentIndex(),
                this.getNextIndex(),
                "left"
              );
            }, this.options.interval);
          }
        }
      }

      // 声明轮播图
      new Horizontal({
        element: document.querySelector(".horizontal"),
        height: "100%",
        index: 1,
        interval: 4000,
        autoplay: true,
      });
    });
  },
});
</script>
<style scoped>
.swiper-horizontal {
  flex: 3;
  padding: 8px 0px 8px 8px;
}
.demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
.horizontal {
  position: relative;
  overflow: hidden;
}
.horizontal .horizontal-items {
  height: 100%;
}
.horizontal .horizontal-items .horizontal-item {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
}
.horizontal .horizontal-items .horizontal-item.active,
.horizontal .horizontal-items .horizontal-item.next,
.horizontal .horizontal-items .horizontal-item.prev {
  display: block;
}
/* 滑动轮播图/渐隐轮播图 */
.horizontal .horizontal-items .horizontal-item.active.right,
.horizontal .horizontal-items .horizontal-item.next {
  /* transform: translateX(100%); */
  opacity: 0;
}
.horizontal .horizontal-items .horizontal-item.active.left,
.horizontal .horizontal-items .horizontal-item.prev {
  /* transform: translateX(-100%); */
  opacity: 0;
}
.horizontal .horizontal-items .horizontal-item.active,
.horizontal .horizontal-items .horizontal-item.next.left,
.horizontal .horizontal-items .horizontal-item.prev.right {
  /* transform: translateX(0); */
  opacity: 1;
}
.horizontal .horizontal-items .horizontal-item:nth-child(even) {
  background-color: transparent;
}
.horizontal .horizontal-items .horizontal-item:nth-child(odd) {
  background-color: transparent;
}
.horizontal .horizontal-arrows .horizontal-arrow {
  position: absolute;
  top: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background: transparent;
  opacity: 0;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
}
.horizontal .horizontal-arrows .horizontal-arrow.arrow-prev {
  left: 10px;
  transform: translateX(-10px) translateY(-50%);
}
.horizontal .horizontal-arrows .horizontal-arrow.arrow-next {
  right: 10px;
  transform: translateX(10px) translateY(-50%);
}
.horizontal .horizontal-arrows .horizontal-arrow:hover {
  background: rgba(255, 255, 255, 0.3);
}
.horizontal:hover .horizontal-arrows .horizontal-arrow.arrow-prev {
  transform: translateX(0) translateY(-50%);
  opacity: 1;
}
.horizontal:hover .horizontal-arrows .horizontal-arrow.arrow-next {
  transform: translateX(0) translateY(-50%);
  opacity: 1;
}
.horizontal .horizontal-dots {
  position: absolute;
  display: flex;
  z-index: 1;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  list-style: none;
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: all 0.3s;
}
.horizontal:hover .horizontal-dots {
  opacity: 1;
}
.horizontal .horizontal-dots .horizontal-dot {
  margin: 0 4px;
  cursor: pointer;
}
.horizontal .horizontal-dots .horizontal-dot::before {
  content: "";
  display: block;
  width: 16px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.3s;
}
.horizontal .horizontal-dots .horizontal-dot.active::before {
  width: 24px;
  background: rgba(255, 255, 255, 1);
}
</style>