<template>
  <carousel-context-fade
    v-if="effect === 'fade'"
    :index-counter="indexCounter"
    :transition-style="transitionStyle"
  >
    <slot></slot>
  </carousel-context-fade>
  <carousel-context-roll
    v-if="effect === 'roll'"
    :direction="direction"
    :effect="effect"
    :card-num="cardNum"
    :index-counter="indexCounter"
    :transition-style="transitionStyle"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :interval="interval"
    :transform="transform"
  >
    <slot></slot>
  </carousel-context-roll>
  <carousel-context-slide
    v-if="effect === 'slide'"
    :direction="direction"
    :effect="effect"
    :card-num="cardNum"
    :index-counter="indexCounter"
    :transition-style="transitionStyle"
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :interval="interval"
  >
    <slot></slot>
  </carousel-context-slide>
</template>

<script setup>
import CarouselContextFade from './CarouselContextFade.vue';
import CarouselContextRoll from './CarouselContextRoll.vue';
import CarouselContextSlide from './CarouselContextSlide.vue';
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
      return ['slide', 'fade', 'roll'].includes(value);
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
</script>

<style scoped lang="scss"></style>
