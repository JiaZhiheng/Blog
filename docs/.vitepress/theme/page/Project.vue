<template>
  <div class="project">
    <div class="project__wrap">
      <div class="project__carousel">
        <carousel
          v-for="carouselItem in config"
          :key="carouselItem.type"
          :class="`carousel carousel--${carouselItem.effect}`"
          :direction="carouselItem.direction"
          :effect="carouselItem.effect"
          :turn-direction="carouselItem.turnDirection"
          :slides-per-view="carouselItem.slidesPerView"
          :space-between="carouselItem.spaceBetween"
          :interval="carouselItem.interval"
          :transition-style="carouselItem.transitionStyle"
          :show-arrow="carouselItem.showArrow"
          :show-dots="carouselItem.showDots"
          :arrow-placement="carouselItem.arrowPlacement"
          :dot-placement="carouselItem.dotPlacement"
          :delay="carouselItem.delay"
        >
          <component
            v-for="item in carouselItem.config"
            :key="item.id"
            :is="getCarouselComponent(carouselItem.effect)"
            :item="item"
          />
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import carousel from 'vue3-carousel-component';
import CardFade from '@/components/card/CardFade.vue';
import CardSlide from '@/components/card/CardSlide.vue';
import CardScroll from '@/components/card/CardScroll.vue';
import { fadeConfig, scrollConfig, slideConfig } from '@/components/card/card.config';
import 'vue3-carousel-component/dist/style.css';

const config = ref([
  {
    config: fadeConfig,
    direction: 'horizontal',
    effect: 'fade',
    showArrow: true,
    showDots: true,
    slidesPerView: 1,
    transitionStyle: 'all 300ms linear',
    showArrow: 'hover',
    showDots: 'hover',
    dotPlacement: 'bottom',
    arrowPlacement: 'center',
    delay: 1400
  },
  {
    config: slideConfig,
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 2,
    spaceBetween: 16,
    transitionStyle: 'all 300ms linear',
    showArrow: 'never',
    showDots: 'never',
    delay: 1400
  },
  {
    config: scrollConfig,
    direction: 'horizontal',
    effect: 'scroll',
    slidesPerView: 4,
    spaceBetween: 16,
    transitionStyle: 'all 4000ms linear',
    showArrow: 'never',
    showDots: 'never',
    delay: 1400
  }
]);

const getCarouselComponent = (effect) => {
  const components = {
    fade: CardFade,
    slide: CardSlide,
    scroll: CardScroll
  };
  return components[effect] || null;
};
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  height: calc(100vh - 64px);
  padding: 0 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrap {
    max-width: 1312px;
    margin: 0 auto;
  }

  &__carousel {
    width: 1312px;
    height: 840px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 2fr 1fr;
  }

  .carousel {
    &--fade {
      grid-area: 1/1/2/2;
      animation: bounceInLeft 1s both;
      animation-delay: 0s;
      height: 100%;
      width: 100%;
      padding: 8px;
      margin: 0;
    }

    &--slide {
      grid-area: 1/2/2/3;
      animation: bounceInRight 1s both;
      animation-delay: 0.2s;
      height: calc(100% - 16px);
      width: 100%;
      padding: 0 8px;
      margin: 8px 0;
    }

    &--scroll {
      grid-area: 2/1/3/3;
      animation: bounceInUp 1s both;
      animation-delay: 0.4s;
      height: 100%;
      width: calc(100% - 16px);
      padding: 8px 0;
      margin: 0 8px;
    }
  }
}
</style>
