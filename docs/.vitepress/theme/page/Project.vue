<template>
	<div class="project">
		<div class="wrap">
			<div class="carousel">
				<carousel-fade class="fade"></carousel-fade>
				<carousel-vertical class="vertical"></carousel-vertical>
				<carousel-horizontal class="horizontal"></carousel-horizontal>
			</div>
		</div>
	</div>
</template>

<script setup>
	import CarouselFade from "@/components/carousel/CarouselFade.vue";
	import CarouselVertical from "@/components/carousel/CarouselVertical.vue";
	import CarouselHorizontal from "@/components/carousel/CarouselHorizontal.vue";
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
	.fade {
		grid-area: 1/1/2/2;
	}
	.vertical {
		grid-area: 1/2/2/3;
	}
	.horizontal {
		grid-area: 2/1/3/3;
	}
</style>
