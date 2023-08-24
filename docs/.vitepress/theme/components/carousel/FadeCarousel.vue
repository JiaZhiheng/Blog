<template>
	<div class="demo-item" :style="item.styleObject">
		<h1 class="item-name" :style="item.infoStyle">{{ item.name }}</h1>
		<p class="item-info" :style="item.infoStyle">{{ item.info }}</p>
		<a class="item-url" :style="item.infoStyle" :href="item.url" target="_blank"
			>在线预览</a
		>
		<a
			class="item-source"
			:style="item.infoStyle"
			:href="item.source"
			target="_blank"
			>查看源码</a
		>
		<div :style="item.infoStyle">敬请期待...</div>
	</div>
</template>
<script setup>
	const props = defineProps({
		item: Object,
	});
</script>

<style scoped>
	.demo-item {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		padding: 20px;
	}
	.item-name {
		color: #fff;
	}
	.item-info {
		color: #fff;
		font-size: 30px;
	}
	.item-url {
		color: #409eff;
	}
	.item-source {
		color: #409eff;
	}
</style>
