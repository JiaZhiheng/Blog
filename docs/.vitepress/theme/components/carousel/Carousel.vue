<template>
  <div class="container">
    <carousel-context
      :direction="direction"
      :effect="effect"
      :card-num="cardNum"
      :index-counter="indexCounter"
      :transition-style="transitionStyle"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
    >
      <slot></slot>
    </carousel-context>
    <carousel-dots
      v-if="showDots"
      @to="to"
      :card-num="cardNum"
      :slides-per-view="slidesPerView"
      :index-counter="indexCounter"
    >
    </carousel-dots>
    <carousel-arrow v-if="showArrow" @prev="prev" @next="next"> </carousel-arrow>
  </div>
</template>
<script setup>
import { ref, useSlots, onMounted, onUnmounted } from 'vue';
import CarouselContext from './CarouselContext.vue';
import CarouselArrow from './CarouselArrow.vue';
import CarouselDots from './CarouselDots.vue';

/**
 * Props定义，用于接收父组件传递的属性值
 *
 * @prop {String} direction - 轮播图方向，可选值包括 "horizontal"、"vertical"。
 * @prop {String} effect - 轮播图效果，可选值包括 "slide"、"fade"。
 * @prop {Boolean} turnDirection - 轮播方向，默认为 true。
 * @prop {Boolean} showDots - 是否显示轮播点，默认为 false。
 * @prop {Boolean} showArrow - 是否显示轮播箭头，默认为 false。
 * @prop {Number} slidesPerView - 每一页显示的轮播图数量，默认为 1。
 * @prop {Number} spaceBetween - 轮播图之间的间距，默认为 0。
 * @prop {Number} interval - 轮播间隔，单位毫秒，默认为 4000。
 * @prop {String} transitionStyle - 过渡效果的样式，单位秒，必需属性。
 * @prop {Boolean} immediate - 是否立即开始轮播，默认为 false。
 */
const props = defineProps({
  direction: {
    type: String,
    default: 'horizontal',
    validator: (value) => {
      return ['horizontal', 'vertical'].includes(value);
    }
  },
  effect: {
    type: String,
    default: 'fade',
    validator: (value) => {
      return ['slide', 'fade'].includes(value);
    }
  },
  turnDirection: {
    type: Boolean,
    default: true
  },
  showDots: {
    type: Boolean,
    default: false
  },
  showArrow: {
    type: Boolean,
    default: false
  },
  slidesPerView: {
    type: Number,
    default: 1
  },
  spaceBetween: {
    type: Number,
    default: 0
  },
  interval: {
    type: Number,
    default: 4000
  },
  transitionStyle: {
    type: String,
    required: true
  },
  immediate: {
    type: Boolean,
    default: false
  }
});

const cardNum = useSlots().default()[0].children.length;
const indexCounter = ref(0);
const playIntervalId = ref(null);

const waitingForPlay = ref(false);
/**
 * 轮播图自动播放锁
 * @type {Ref<boolean>}
 * @default false
 * @description 
 * 作用：控制轮播图是否可以自动播放，当页面不可见时，自动播放会被暂停。
 * 原因：由于浏览器的性能优化策略，当页面不可见时，浏览器会停止一切与页面渲染相关的操作。
 *      此时 transition 动画停止播放但定时器仍在运行，造成动画与定时器不同步的现象。
 *      当页面重新可见时，浏览器会把前面累计的动画效果全部执行，造成轮播图卡片位置混乱的问题。
 * 目的：解决轮播图卡片位置混乱的问题。
 * 用法：当轮播图需要切换且页面不可见时，将其赋值为 true 视作轮播图 「等待播放」
 *      轮播图 「等待播放」 时回到标签页会调用 init 方法，此时轮播图继续播放。
 * 注意：不要在页面不可见时将 waitingForPlay 赋值为 true。
 *      因为频繁切换标签页时会重复调用 init 方法，导致轮播图重复播放，最终造成卡片重叠的问题。
 *      而要在轮播图切换时将 waitingForPlay 赋值为 true。
 *      即使频繁切换标签页也不会重复调用 init 方法，可以规避轮播图重复播放造成卡片重叠的问题。 
 */

// 监听页面可见性变化
function handleVisibilityChange() {
  if (!document.hidden && waitingForPlay.value) {
    waitingForPlay.value = false;
    init();
  }
}

// 检查可见性
function checkVisibility() {
  if (document.hidden) {
    waitingForPlay.value = true;
    return false; // 表示不可见
  } else {
    return true; // 表示可见
  }
}

// 滑动至前一页 (自动)
function toPrev() {
  if (!checkVisibility()) return; // 如果不可见，直接返回
  indexCounter.value = (cardNum - getCurrentIndex() + 1) % cardNum;
}

// 滑动至后一页 (自动)
function toNext() {
  if (!checkVisibility()) return; // 如果不可见，直接返回
  indexCounter.value = cardNum - getCurrentIndex() - 1;
}

// 滑动至某一页
function to(index) {
  stopPlay();
  indexCounter.value = (cardNum - index) % cardNum;
  startPlay();
}

// 滑动至前一页 (手动)
function prev() {
  to(getCurrentIndex() - 1);
}

// 滑动至后一页 (手动)
function next() {
  to(getCurrentIndex() + 1);
}

// 获取当前页
function getCurrentIndex() {
  return (cardNum - indexCounter.value) % cardNum;
}

// 开始播放
function startPlay() {
  playIntervalId.value = setInterval(props.turnDirection ? toNext : toPrev, props.interval);
}

// 暂停播放
function stopPlay() {
  clearInterval(playIntervalId.value);
}

// 初始化
function init() {
  stopPlay();
  if (props.immediate) props.turnDirection ? toNext() : toPrev();
  startPlay();
}

// 监听页面加载完成事件
onMounted(() => {
  setTimeout(init, 1400);
  document.addEventListener('visibilitychange', handleVisibilityChange);
});

// 监听页面卸载事件
onUnmounted(() => {
  stopPlay();
  document.removeEventListener('visibilitychange', handleVisibilityChange);
});
</script>



