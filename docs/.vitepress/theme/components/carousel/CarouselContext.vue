<template>
	<div class="content" ref="slots">
		<slot></slot>
	</div>
</template>
<script setup>
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