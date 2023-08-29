<template>
  <div class="project">
    <div class="project__wrap">
      <div class="project__carousel">
        <carousel
          v-for="carouselItem in config"
          :key="carouselItem.id"
          :class="`carousel carousel--${carouselItem.type}`"
          :type="carouselItem.type"
          :show-card-num="carouselItem.showCardNum"
          :card-num="carouselItem.cardNum"
          :interval="carouselItem.interval"
          :transition-duration="carouselItem.transitionDuration"
          :immediate="carouselItem.immediate"
        >
          <component
            v-for="item in carouselItem.config"
            :key="item.id"
            :is="getCarouselComponent(carouselItem.type)"
            :item="item"
          />
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from '@/components/carousel/Carousel.vue';
import CardFade from '@/components/carousel/CardFade.vue';
import CardVertical from '@/components/carousel/CardVertical.vue';
import CardHorizontal from '@/components/carousel/CardHorizontal.vue';
import { fadeConfig, horizontalConfig, verticalConfig } from '@/components/carousel/carousel.config';

const config = ref([
  {
    id: 1,
    config: fadeConfig,
    class: 'fade',
    type: 'fade',
    showArrow: true,
    showDots: true,
    showCardNum: 1,
    cardNum: 4,
    interval: 4000,
    transitionDuration: 400,
  },
  {
    id: 2,
    config: verticalConfig,
    class: 'vertical',
    type: 'vertical',
    showArrow: false,
    showDots: false,
    showCardNum: 2,
    cardNum: 8,
    interval: 4000,
    transitionDuration: 400,
  },
  {
    id: 3,
    config: horizontalConfig,
    class: 'horizontal',
    type: 'horizontal',
    showArrow: false,
    showDots: false,
    showCardNum: 4,
    cardNum: 8,
    interval: 4000,
    transitionDuration: 4000,
    immediate: true,
  },
]);

const getCarouselComponent = (type) => {
  const components = {
    fade: CardFade,
    vertical: CardVertical,
    horizontal: CardHorizontal,
  };
  return components[type] || null;
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
    max-width: 1280px;
    margin: 0 auto;
  }

  &__carousel {
    width: 1280px;
    height: 820px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 2fr 1fr;
  }

  .carousel {
    &--fade {
      grid-area: 1/1/2/2;
      animation: bounceInLeft 1s both;
    }

    &--vertical {
      grid-area: 1/2/2/3;
      animation: bounceInRight 1s both;
      animation-delay: 0.2s;
    }

    &--horizontal {
      grid-area: 2/1/3/3;
      animation: bounceInUp 1s both;
      animation-delay: 0.4s;
    }
  }
}
</style>
