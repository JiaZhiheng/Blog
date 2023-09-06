<template>
	<div class="item" :style="item.style">
		<div class="item-in">
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
	.item {
		height: 100%;
		width: 100%;
		border-radius: 12px;
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
