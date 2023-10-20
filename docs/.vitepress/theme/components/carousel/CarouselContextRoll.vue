<template>
  <div class="card-container">
    <div
      class="box"
      style="height: 100%; width: calc(600% + 80px)"
      :style="{ transform, transition }"
    >
      <div class="test">
        <div v-for="slotContent in cardStyles" :key="slotContent.key" class="card-item">
          <component :is="slotContent"></component>
        </div>
      </div>
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
  interval: Number,
  transform: Number
});

const transform = ref('translateX(0)');
const transition = ref('all 0s linear');

watch(
  () => props.transform,
  (newTransform, oldTransform) => {
    console.log(newTransform, oldTransform);
    // if (newTransform === 0) {
    //   if (oldTransform === 7) {
    //     console.log('向左回滚');
    //     transform.value = `translateX(-1280px)`;
    //     transition.value = `all 0s linear`;
    //     setTimeout(() => {
    //       transform.value = `translateX(-1280px)`;
    //       transition.value = `all 0s linear`;
    //     }, 300);
    //   } else if (oldTransform === -7) {
    //     console.log('向右回滚');
    //     setTimeout(() => {
    //       transform.value = `translateX(-1280px)`;
    //       transition.value = `all 0s linear`;
    //     }, 300);
    //   }
    // } else {
    //   transform.value = `translateX(- ${newTransform} * 320px)`;
    //   transition.value = `all 0.3s linear`;
    // }
  }
);

const cardStyles = expandAndFillArray(useSlots().default()[0].children[0].children[0].children);

// 数组扩列
function expandAndFillArray(arr) {
  return arr.concat(...Array(2).fill(arr));
}
</script>

<style scoped lang="scss">
.card-container {
  // overflow: hidden;
  position: relative;
  border-radius: 12px;
  cursor: pointer;
}

.test {
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100%;
  animation: test 32s linear infinite;
  animation-delay: 1.4s;
}

@keyframes test {
  0% {
    transform: translateX(-2560px);
  }

  100% {
    transform: translateX(-5120px);
  }
}

.card-item {
  width: 304px;
  height: 264px;
  display: block;
  position: relative;
  border-radius: 12px;
}
</style>
