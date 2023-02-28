<template>
	<div class="swiper">
		<horizontal></horizontal>
		<vertical></vertical>
	</div>
</template>

<script setup>
	import horizontal from "./components/horizontal.vue";
	import vertical from "./components/vertical.vue";
</script>

<style>
	.swiper {
		width: 1152px;
		height: 492px;
		display: flex;
		margin: 0 auto;
	}
</style>
