<template>
	<div class="project">
		<div class="wrap">
			<div class="carousel">
				<carousel
					class="fade"
					type="fade"
					show-arrow
					show-dots
					:config="fadeConfig"
				>
					<template #default="{ computedItemClass }">
						<fade-carousel
							class="fade-item"
							:class="computedItemClass(index)"
							v-for="(item, index) in fadeConfig"
							:item="item"
							:key="item.id"
						>
						</fade-carousel>
					</template>
				</carousel>
				<carousel class="vertical" type="vertical">
					<template #default="{ computedItemClass }">
						<vertical-carousel
							class="vertical-item"
							:class="computedItemClass(index)"
							v-for="(item, index) in verticalConfig"
							:item="item"
							:key="item.id"
						></vertical-carousel>
					</template>
				</carousel>
				<carousel class="horizontal" type="horizontal">
					<template #default="{ computedItemClass }">
						<horizontal-carousel
							class="horizontal-item"
							:class="computedItemClass(index)"
							v-for="(item, index) in horizontalConfig"
							:item="item"
							:key="item.id"
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
	.fade-item {
		display: none;
		position: absolute;
		width: 100%;
		height: 100%;
		transition: all 0.4s;
		border-radius: 12px;
	}
	.fade-item.active,
	.fade-item.prev,
	.fade-item.next {
		display: block;
	}
	.fade-item.prev,
	.fade-item.next {
		opacity: 0;
	}
	.fade-item-container {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		padding: 20px;
	}

	/* 垂直轮播图 */
	.vertical {
		grid-area: 1/2/2/3;
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-name: bounceInRight;
		animation-delay: 0.2s;
	}
	.vertical-item {
		display: none;
		position: absolute;
		width: 100%;
		height: calc(50% - 8px);
		transition: all 0.3s linear;
		background-color: transparent;
		overflow: hidden;
		color: #fff;
		text-align: center;
		font-size: 16px;
		border-radius: 12px;
		cursor: pointer;
	}
	.vertical-item {
		display: none;
		position: absolute;
		width: 100%;
		height: calc(50% - 8px);
		transition: all 0.3s linear;
		background-color: transparent;
		overflow: hidden;
		color: #fff;
		text-align: center;
		font-size: 16px;
		border-radius: 12px;
		cursor: pointer;
	}
	.vertical-item.active-x,
	.vertical-item.active-y,
	.vertical-item.next,
	.vertical-item.prev {
		display: block;
	}
	.vertical-item.prev {
		transform: translateY(calc(-100% - 16px));
	}
	.vertical-item.active-x {
		transform: translateY(0);
	}
	.vertical-item.active-y {
		transform: translateY(calc(100% + 16px));
	}
	.vertical-item.next {
		transform: translateY(calc(200% + 32px));
	}
	/* 水平轮播图 */
	.horizontal {
		grid-area: 2/1/3/3;
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-name: bounceInUp;
		animation-delay: 0.4s;
	}
	.horizontal-item {
		display: none;
		width: 25%;
		height: 100%;
		padding: 0 8px;
		position: absolute;
		transition: all 4s linear;
	}
	.horizontal-item {
		display: none;
		width: 25%;
		height: 100%;
		padding: 0 8px;
		position: absolute;
		transition: all 4s linear;
	}
	.horizontal-item.active-A,
	.horizontal-item.active-B,
	.horizontal-item.active-C,
	.horizontal-item.active-D,
	.horizontal-item.next,
	.horizontal-item.prev {
		display: block;
	}
	.horizontal-item.prev {
		transform: translateX(-100%);
	}
	.horizontal-item.active-A {
		transform: translateX(0);
	}
	.horizontal-item.active-B {
		transform: translateX(100%);
	}
	.horizontal-item.active-C {
		transform: translateX(200%);
	}
	.horizontal-item.active-D {
		transform: translateX(300%);
	}
	.horizontal-item.next {
		transform: translateX(400%);
	}
</style>
