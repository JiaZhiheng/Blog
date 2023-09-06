<template>
	<div class="content" :class="type">
		<slot></slot>
	</div>
</template>
<script setup>
	const props = defineProps({
		type: String,
	});
</script>

<style scoped lang="scss">
	.content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		border-radius: 12px;
		transform: rotate(0);
	}
</style>
