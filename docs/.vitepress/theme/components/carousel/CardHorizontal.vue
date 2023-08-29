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
		width: calc(25% - 12px);
		height: 100%;
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
		transform: translateX(calc(-100% - 16px));
	}
	.item.active-A {
		transform: translateX(0);
	}
	.item.active-B {
		transform: translateX(calc(100% + 16px));
	}
	.item.active-C {
		transform: translateX(calc(200% + 32px));
	}
	.item.active-D {
		transform: translateX(calc(300% + 48px));
	}
	.item.next {
		transform: translateX(calc(400% + 64px));
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
