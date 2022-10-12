<template>
  <div class="swiper-horizontal">
    <div class="carousel">
      <div class="carousel-panel">
        <div class="demo-panel" style="background: #4586f3"></div>
      </div>
      <div class="carousel-panel">
        <div class="demo-panel" style="background: #eb4334"></div>
      </div>
      <div class="carousel-panel">
        <div class="demo-panel" style="background: #fbbd06"></div>
      </div>
      <div class="carousel-panel">
        <div class="demo-panel" style="background: #35aa53"></div>
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

      class Carousel {
        constructor(options) {
          const defaultOptions = {
            element: null,
            height: 0,
            index: 0,
            autoplay: true,
            interval: 3000,
          };
          this.options = Object.assign({}, defaultOptions, options);
          this.initCarousel();
          this.bindCarousel();
          this.playCarousel();
        }

        initCarousel() {
          this.timer = null;
          this.initCarouselContainer();
          this.initCarouselPanelsAndDots();
          this.initCarouselArrows();
        }

        initCarouselContainer() {
          this.$container = this.options.element;
          this.$container.classList.add("tiny-carousel");
          console.log(this.$container.classList);
          this.$container.style.height = this.options.height;
          const $panelContainer = document.createElement("div");
          $panelContainer.setAttribute("class", "carousel-panels");
          this.$panelContainer = $panelContainer;
          const $dotsContainer = document.createElement("ul");
          $dotsContainer.setAttribute("class", "carousel-dots");
          this.$dotsContainer = $dotsContainer;
        }

        initCarouselPanelsAndDots() {
          this.$$panels = this.$container.querySelectorAll(".carousel-panel");
          this.$$panels[this.options.index].classList.add("active");
          this.$$panels.forEach(($panel) => {
            this.$panelContainer.appendChild($panel);
            this.$dotsContainer.appendChild(this.initCarouselDot());
          });
          this.$container.appendChild(this.$panelContainer);
          this.$container.appendChild(this.$dotsContainer);
          this.$$dots = this.$container.querySelectorAll(".carousel-dot");
          this.$$dots[this.options.index].classList.add("active");
        }

        initCarouselArrows() {
          const $arrowContainer = document.createElement("div");
          $arrowContainer.setAttribute("class", "carousel-arrows");
          // 左箭头
          const $arrowPrev = document.createElement("button");
          $arrowPrev.setAttribute("class", "carousel-arrow arrow-prev");
          // 右箭头
          const $arrowNext = document.createElement("button");
          $arrowNext.setAttribute("class", "carousel-arrow arrow-next");
          $arrowPrev.innerHTML = `<svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5397 3.53998L10.4589 4.45922L6.91856 7.9996L10.4589 11.54L9.5397 12.4592L5.08008 7.9996L9.5397 3.53998Z" fill="#fff" fill-opacity="0.9"></path></svg>`;
          $arrowNext.innerHTML = `<svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.4603 12.4592L5.54106 11.54L9.08144 7.99961L5.54106 4.45923L6.4603 3.53999L10.9199 7.99961L6.4603 12.4592Z" fill="#fff" fill-opacity="0.9"></path></svg>`;
          $arrowContainer.appendChild($arrowPrev);
          $arrowContainer.appendChild($arrowNext);
          this.$container.appendChild($arrowContainer);
        }

        initCarouselDot() {
          const $dot = document.createElement("li");
          $dot.setAttribute("class", "carousel-dot");
          return $dot;
        }

        bindCarousel() {
          this.bindCarouselArrow();
          this.bindCarouselDots();
          // this.bindCarouselContainer()
        }

        bindCarouselArrow() {
          const $arrowPrev = this.$container.querySelector(".arrow-prev");
          const $arrowNext = this.$container.querySelector(".arrow-next");
          $arrowPrev.addEventListener("click", () => {
            this.setCarousel(
              this.getCurrentIndex(),
              this.getPrevIndex(),
              "right"
            );
          });
          $arrowNext.addEventListener("click", () => {
            this.setCarousel(
              this.getCurrentIndex(),
              this.getNextIndex(),
              "left"
            );
          });
        }

        bindCarouselDots() {
          this.$$dots.forEach(($carouselDot) => {
            $carouselDot.addEventListener("click", (e) => {
              const fromIndex = this.getCurrentIndex();
              const toIndex = [...this.$$dots].indexOf(e.target);
              if (fromIndex !== toIndex) {
                const direction = fromIndex > toIndex ? "right" : "left";
                this.setCarousel(fromIndex, toIndex, direction);
              }
            });
          });
        }

        /* 鼠标移入暂停轮播/鼠标移出开始轮播 */
        // bindCarouselContainer() {
        //     if (this.options.autoplay) {
        //         this.$container.addEventListener('mouseenter', () => {
        //             this.pauseCarousel()
        //         })
        //         this.$container.addEventListener('mouseleave', () => {
        //             this.playCarousel()
        //         })
        //     }
        // }

        setCarousel(fromIndex, toIndex, direction) {
          if (!this.isAnimate) {
            this.isAnimate = true;
            this.$from = this.$$panels[fromIndex];
            this.$to = this.$$panels[toIndex];
            this.direction = direction;
            this.setCarouselDot(toIndex);
            this.setCarouselPanel();
          }
        }

        getCurrentIndex() {
          return [...this.$$dots].indexOf(
            this.$container.querySelector(".carousel-dot.active")
          );
        }

        getPrevIndex() {
          return (
            (this.getCurrentIndex() - 1 + this.$$dots.length) %
            this.$$dots.length
          );
        }

        getNextIndex() {
          return (this.getCurrentIndex() + 1) % this.$$dots.length;
        }

        setCarouselPanel() {
          const type = this.direction === "left" ? "next" : "prev";
          this.$to.setAttribute("class", `carousel-panel ${type}`);
          reflow(this.$to);
          this.$from.setAttribute(
            "class",
            `carousel-panel active ${this.direction}`
          );
          this.$to.setAttribute(
            "class",
            `carousel-panel ${type} ${this.direction}`
          );
          this.resetCarouselPanel();
        }

        resetCarouselPanel() {
          const callback = () => {
            this.$from.setAttribute("class", "carousel-panel");
            this.$to.setAttribute("class", "carousel-panel active");
            this.$from.removeEventListener("transitionend", callback, false);
            this.isAnimate = false;
          };
          this.$from.addEventListener("transitionend", callback, false);
        }

        setCarouselDot(index) {
          this.$$dots.forEach(($carouselDot) =>
            $carouselDot.classList.remove("active")
          );
          this.$$dots[index].classList.add("active");
        }

        pauseCarousel() {
          if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
          }
        }

        playCarousel() {
          if (this.options.autoplay && !this.timer) {
            this.timer = setInterval(() => {
              this.setCarousel(
                this.getCurrentIndex(),
                this.getNextIndex(),
                "left"
              );
            }, this.options.interval);
          }
        }
      }

      new Carousel({
        element: document.querySelector(".carousel"),
        height: "100%",
        index: 1,
        interval: 3000,
        autoplay: true,
      });
    });
  },
});
</script>
<style>
.swiper-horizontal {
  flex: 3;
  padding: 8px 0px 8px 8px;
}

.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.tiny-carousel {
  position: relative;
  overflow: hidden;
}

.tiny-carousel .carousel-panels {
  height: 100%;
}

.tiny-carousel .carousel-panels .carousel-panel {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
}

.tiny-carousel .carousel-panels .carousel-panel.active,
.tiny-carousel .carousel-panels .carousel-panel.next,
.tiny-carousel .carousel-panels .carousel-panel.prev {
  display: block;
}

/* 滑动轮播图/渐隐轮播图 */
.tiny-carousel .carousel-panels .carousel-panel.active.right,
.tiny-carousel .carousel-panels .carousel-panel.next {
  /* transform: translateX(100%); */
  opacity: 0;
}

.tiny-carousel .carousel-panels .carousel-panel.active.left,
.tiny-carousel .carousel-panels .carousel-panel.prev {
  /* transform: translateX(-100%); */
  opacity: 0;
}

.tiny-carousel .carousel-panels .carousel-panel.active,
.tiny-carousel .carousel-panels .carousel-panel.next.left,
.tiny-carousel .carousel-panels .carousel-panel.prev.right {
  /* transform: translateX(0); */
  opacity: 1;
}

.tiny-carousel .carousel-panels .carousel-panel:nth-child(even) {
  background-color: transparent;
}

.tiny-carousel .carousel-panels .carousel-panel:nth-child(odd) {
  background-color: transparent;
}

.tiny-carousel .carousel-arrows .carousel-arrow {
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

.tiny-carousel .carousel-arrows .carousel-arrow.arrow-prev {
  left: 10px;
  transform: translateX(-10px) translateY(-50%);
}

.tiny-carousel .carousel-arrows .carousel-arrow.arrow-next {
  right: 10px;
  transform: translateX(10px) translateY(-50%);
}

.tiny-carousel .carousel-arrows .carousel-arrow:hover {
  background: rgba(255, 255, 255, 0.3);
}

.tiny-carousel:hover .carousel-arrows .carousel-arrow.arrow-prev {
  transform: translateX(0) translateY(-50%);
  opacity: 1;
}

.tiny-carousel:hover .carousel-arrows .carousel-arrow.arrow-next {
  transform: translateX(0) translateY(-50%);
  opacity: 1;
}

.tiny-carousel .carousel-dots {
  position: absolute;
  display: flex;
  z-index: 1;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  list-style: none;
  margin: 0;
  padding: 0;
}

.tiny-carousel .carousel-dots .carousel-dot {
  margin: 0 4px;
  cursor: pointer;
}

.tiny-carousel .carousel-dots .carousel-dot::before {
  content: "";
  display: block;
  width: 16px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.3s;
}

.tiny-carousel .carousel-dots .carousel-dot.active::before {
  width: 24px;
  background: rgba(255, 255, 255, 1);
}
</style>
