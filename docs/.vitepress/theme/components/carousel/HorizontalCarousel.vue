<template>
	<div class="item">
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
	.item {
		display: none;
		width: 25%;
		height: 100%;
		padding: 0 8px;
		position: absolute;
		transition: all 4s linear;
		border-radius: 12px;
		font-size: 40px;
		font-weight: bold;
		color: #333;
	}
	.item.active-A,
	.item.active-B,
	.item.active-C,
	.item.active-D,
	.item.next,
	.item.prev {
		display: block;
	}
	.item.prev {
		transform: translateX(-100%);
	}
	.item.active-A {
		transform: translateX(0);
	}
	.item.active-B {
		transform: translateX(100%);
	}
	.item.active-C {
		transform: translateX(200%);
	}
	.item.active-D {
		transform: translateX(300%);
	}
	.item.next {
		transform: translateX(400%);
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
