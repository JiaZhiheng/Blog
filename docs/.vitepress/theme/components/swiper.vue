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
	import horizontal from "./horizontal.vue";
	import vertical from "./vertical.vue";
	const { Layout } = DefaultTheme;
</script>
<style scoped>
	.swiper {
		display: none;
	}
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
</style>
