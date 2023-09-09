<template>
	<div class="project">
		<div class="project__wrap">
			<div class="project__carousel">
				<carousel
					v-for="carouselItem in config"
					:key="carouselItem.id"
					:class="`carousel carousel--${carouselItem.type}`"
					:type="carouselItem.type"
					:direction="carouselItem.direction"
					:effect="carouselItem.effect"
					:turn-direction="carouselItem.turnDirection"
					:slides-per-view="carouselItem.slidesPerView"
					:space-between="carouselItem.spaceBetween"
					:interval="carouselItem.interval"
					:transition-style="carouselItem.transitionStyle"
					:immediate="carouselItem.immediate"
					:show-arrow="carouselItem.showArrow"
					:show-dots="carouselItem.showDots"
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
	import { ref } from "vue";
	import Carousel from "@/components/carousel/Carousel.vue";
	import CardFade from "@/components/card/CardFade.vue";
	import CardVertical from "@/components/card/CardVertical.vue";
	import CardHorizontal from "@/components/card/CardHorizontal.vue";
	import {
		fadeConfig,
		horizontalConfig,
		verticalConfig,
	} from "@/components/card/card.config";

	const config = ref([
		{
			id: 1,
			config: fadeConfig,
			type: "fade",
			direction: "horizontal",
			effect: "fade",
			showArrow: true,
			showDots: true,
			slidesPerView: 1,
			transitionStyle: "all 300ms linear",
		},
		{
			id: 2,
			config: verticalConfig,
			type: "vertical",
			direction: "vertical",
			effect: "slide",
			slidesPerView: 2,
			spaceBetween: 16,
			transitionStyle: "all 300ms linear",
		},
		{
			id: 3,
			config: horizontalConfig,
			type: "horizontal",
			direction: "horizontal",
			effect: "slide",
			slidesPerView: 4,
			spaceBetween: 16,
			transitionStyle: "all 4000ms linear",
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
				animation-delay: 0s;
				height: 100%;
				width: 100%;
				padding: 8px;
				margin: 0;
			}

			&--vertical {
				grid-area: 1/2/2/3;
				animation: bounceInRight 1s both;
				animation-delay: 0.2s;
				height: calc(100% - 16px);
				width: 100%;
				padding: 0 8px;
				margin: 8px 0;
			}

			&--horizontal {
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
