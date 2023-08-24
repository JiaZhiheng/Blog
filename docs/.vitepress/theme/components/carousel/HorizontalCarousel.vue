<template>
	<div class="horizontal-item-container">
		<div class="item-in" :style="item.style">
			<span>{{ item.name }}</span>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		item: Object,
	});
</script>

<style scoped>
	.horizontal-item-container {
		height: 100%;
		border-radius: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40px;
		font-weight: bold;
		color: #333;
	}
	.item-in {
		height: 100%;
		border-radius: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40px;
		font-weight: bold;
		color: #333;
	}
</style>
