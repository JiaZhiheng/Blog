<template>
  <div class="card-container" :class="direction">
    <div
      v-for="(slotContent, index) in $slots.default()[0].children[0].children"
      :key="slotContent.key"
      class="card-item"
      :style="itemStyle(index)"
    >
      <component :is="slotContent"></component>
    </div>
  </div>
</template>

<script setup>
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
  cardNum: Number,
  indexCounter: Number,
  transitionStyle: String,
  slidesPerView: Number,
  spaceBetween: Number
});

const cardSize = `calc(${100 / props.slidesPerView}% - ${
  (props.spaceBetween * (props.slidesPerView - 1)) / props.slidesPerView
}px)`;

const config = generateCardArray(
  props.cardNum,
  props.slidesPerView,
  props.direction,
  props.effect,
  props.spaceBetween
);

// 生成卡片数组
function generateCardArray(cardNum, slidesPerView, direction, effect, spaceBetween) {
  const cardArray = [];
  function getTransformValue(index, isLast) {
    const offset = isLast
      ? `calc(-100% - ${spaceBetween}px)`
      : `calc(${index * 100}% + ${index * spaceBetween}px)`;
    return direction === 'horizontal' ? `translateX(${offset})` : `translateY(${offset})`;
  }
  for (let i = 0; i < cardNum; i++) {
    const style = { display: 'block' };
    if (effect === 'slide') {
      if (i <= slidesPerView) {
        style.transform = getTransformValue(i, false);
      } else if (i === cardNum - 1) {
        style.transform = getTransformValue(0, true);
      } else {
        style.display = 'none';
      }
    } else {
      style.opacity = i < slidesPerView ? 1 : 0;
    }
    cardArray.push(style);
  }

  return cardArray;
}

function itemStyle(index) {
  return config[(index + props.indexCounter) % config.length];
}
</script>

<style scoped lang="scss">
.card-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  transform: rotate(0);
  cursor: pointer;

  &.horizontal {
    .card-item {
      width: v-bind('cardSize');
    }
  }

  &.vertical {
    .card-item {
      height: v-bind('cardSize');
    }
  }
}

.card-item {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: v-bind('transitionStyle');
}
</style>
