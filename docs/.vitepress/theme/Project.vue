<template>
	<div class="project">
		<div class="box">
			<div class="swiper">
				<horizontal></horizontal>
				<vertical></vertical>
			</div>
			<demo></demo>
		</div>
	</div>
</template>

<script setup>
	import horizontal from "./components/horizontal.vue";
	import vertical from "./components/vertical.vue";
	import demo from "./components/demo.vue";
</script>

<style>
	.project {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.swiper {
		width: 1152px;
		height: 492px;
		display: flex;
		margin: 0 auto;
	}
</style>
