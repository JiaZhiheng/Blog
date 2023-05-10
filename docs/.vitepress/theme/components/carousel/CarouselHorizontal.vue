<template>
	<div class="box">
		<div
			class="box-item"
			:style="item.style"
			v-for="item in horizontalConfig"
		></div>
	</div>
</template>
<script setup>
	import { reactive, onMounted, onUnmounted } from "vue";
	import { horizontalConfig } from "@/components/carousel/carousel.config";
	const data = reactive({});
</script>
<style scoped>
	.box {
		display: flex;
		margin: 0 auto;
		width: 100%;
	}
	.box-item {
		width: 25%;
	}
</style>
