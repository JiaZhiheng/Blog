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

// 滑动至前一页 (自动)
function toPrev() {
  indexCounter.value = (cardNum - getCurrentIndex() + 1) % cardNum;
}

// 滑动至后一页 (自动)
function toNext() {
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
  
  if (props.turnDirection) {
    playIntervalId.value = setInterval(toNext, props.interval);
  } else {
    playIntervalId.value = setInterval(toPrev, props.interval);
  }
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

onMounted(() => {
  setTimeout(init(), 1400);
});

onUnmounted(() => {
  stopPlay();
});
</script>
