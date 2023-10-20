<template>
  <div class="card-container" :class="direction" :style="containerStyle">
    <div v-for="slotContent in cardStyles" :key="slotContent.key" class="card-item">
      <component :is="slotContent"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, useSlots, watch, computed } from 'vue';
const props = defineProps({
  direction: {
    type: String,
    default: 'horizontal',
    validator: (value) => {
      return ['horizontal', 'vertical'].includes(value);
    }
  },
  cardNum: Number,
  indexCounter: Number,
  transitionStyle: String,
  slidesPerView: Number,
  spaceBetween: Number,
  interval: Number
});
const transitionStyleTest = ref('all 0ms linear');
const indexCounterTest = ref(props.indexCounter);

const cardStyles = generateCardStyles(
  useSlots().default()[0].children[0].children[0].children,
  props.slidesPerView
);

function generateCardStyles(arr, num) {
  const frontThree = arr.slice(-num);
  const backThree = arr.slice(0, num);
  arr.unshift(...frontThree);
  arr.push(...backThree);
  return arr;
}

watch(
  () => props.indexCounter,
  (newVal, oldVal) => {
    if (newVal === oldVal) return;
    indexCounterTest.value = newVal;
    if (newVal === 0) {
      setTimeout(() => {
        transitionStyleTest.value = 'all 0ms linear';
        indexCounterTest.value = props.cardNum;
        setTimeout(() => {
          transitionStyleTest.value = props.transitionStyle;
        }, 0);
      }, props.interval - 100);
    }
  }
);

const containerStyle = computed(() => {
  const baseWidthHeight = `calc((100% + 16px) / ${props.slidesPerView} * (${
    props.slidesPerView * 2 + props.cardNum
  }) - 16px)`;
  const width = props.direction === 'horizontal' ? baseWidthHeight : '100%';
  const height = props.direction === 'vertical' ? baseWidthHeight : '100%';
  const transform = `translate${props.direction === 'horizontal' ? 'X' : 'Y'}(calc(
    ((100% + 16px) / (${props.slidesPerView} * 2 + ${props.cardNum})) *
    (${indexCounterTest.value} + ${props.slidesPerView} - (${
      props.slidesPerView * 2 + props.cardNum
    }))
  ))`;
  return {
    width,
    height,
    transition: transitionStyleTest.value,
    transform,
    display: 'flex',
    flexDirection: props.direction === 'vertical' ? 'column' : 'row',
    gap: '16px'
  };
});
</script>

<style scoped lang="scss">
.card-container {
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  cursor: pointer;
}

.card-item {
  width: 304px;
  height: 264px;
  display: block;
  position: relative;
  border-radius: 12px;
}
</style>
