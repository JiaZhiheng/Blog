<template>
	<Layout>
		<template #home-features-after>
			<div class="swiper" id="swiper">
				<horizontal></horizontal>
				<vertical></vertical>
			</div>
		</template>
	</Layout>
</template>
<script setup>
	import DefaultTheme from "vitepress/theme";
	import horizontal from "./components/horizontal.vue";
	import vertical from "./components/vertical.vue";
	const { Layout } = DefaultTheme;
</script>
<style scoped>
	.swiper {
		display: none;
	}

	@media screen and (min-width: 960px) {
		.swiper {
			position: absolute;
			left: -8px;
			top: -8px;
			transform: rotateX(180deg);
			backface-visibility: hidden;
			width: calc(100% + 16px);
			height: calc(100% + 16px);
			display: flex;
		}
	}
</style>
