<template>
	<div class="project">
		<div class="wrap">
			<div class="carousel">
				<carousel
					class="fade"
					type="fade"
					show-arrow
					show-dots
					:show-card-num="1"
					:card-num="4"
					:config="fadeConfig"
				>
					<template #default="{ computedItemClass }">
						<fade-carousel
							v-for="(item, index) in fadeConfig"
							:class="computedItemClass(index)"
							:key="item.id"
							:item="item"
						>
						</fade-carousel>
					</template>
				</carousel>
				<carousel class="vertical" type="vertical" :show-card-num="2" :card-num="8">
					<template #default="{ computedItemClass }">
						<vertical-carousel
							v-for="(item, index) in verticalConfig"
							:class="computedItemClass(index)"
							:key="item.id"
							:item="item"
						></vertical-carousel>
					</template>
				</carousel>
				<carousel class="horizontal" type="horizontal" :show-card-num="4" :card-num="8">
					<template #default="{ computedItemClass }">
						<horizontal-carousel
							v-for="(item, index) in horizontalConfig"
							:class="computedItemClass(index)"
							:key="item.id"
							:item="item"
						>
						</horizontal-carousel>
					</template>
				</carousel>
			</div>
		</div>
	</div>
</template>

<script setup>
	import carousel from "@/components/carousel/Carousel.vue";
	import {
		fadeConfig,
		horizontalConfig,
		verticalConfig,
	} from "@/components/carousel/carousel.config";
	import FadeCarousel from "@/components/carousel/FadeCarousel.vue";
	import VerticalCarousel from "@/components/carousel/VerticalCarousel.vue";
	import HorizontalCarousel from "@/components/carousel/HorizontalCarousel.vue";
</script>

<style scoped>
	.project {
		width: 100%;
		height: calc(100vh - 64px);
		padding: 0 64px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wrap {
		max-width: 1280px;
		margin: 0 auto;
	}
	.carousel {
		width: 1280px;
		height: 820px;
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-template-rows: 2fr 1fr;
	}

	/* 渐隐轮播图 */
	.fade {
		grid-area: 1/1/2/2;
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-name: bounceInLeft;
	}

	/* 垂直轮播图 */
	.vertical {
		grid-area: 1/2/2/3;
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-name: bounceInRight;
		animation-delay: 0.2s;
	}

	/* 水平轮播图 */
	.horizontal {
		grid-area: 2/1/3/3;
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-name: bounceInUp;
		animation-delay: 0.4s;
	}
</style>
