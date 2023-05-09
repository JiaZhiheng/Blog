<template>
	<div class="box">
		<div
			class="box-item"
			:style="item.styleObject"
			v-for="item in data.list"
		></div>
	</div>
</template>
<script setup>
	import { reactive, onMounted, onUnmounted } from "vue";

	const data = reactive({
		list: [
			{
				id: 0,
				name: "项目A",
				info: "前端开发工程师",
				url: "http://101.43.140.74:64/",
				source: "https://github.com/JiaZhiheng",
				styleObject: {
					backgroundColor: "rgba(47, 205, 100, 0.2)",
				},
				infoStyle: {
					color: "rgb(47, 205, 100)",
				},
			},
			{
				id: 0,
				name: "项目B",
				info: "后端开发工程师",
				url: "http://101.43.140.74:64/",
				source: "https://github.com/JiaZhiheng",
				styleObject: {
					backgroundColor: "rgba(80, 190, 250, 0.2)",
				},
				infoStyle: {
					color: "rgb(80, 190, 250)",
				},
			},
			{
				id: 0,
				name: "项目C",
				info: "测试工程师",
				url: "http://101.43.140.74:64/",
				source: "https://github.com/JiaZhiheng",
				styleObject: {
					backgroundColor: "rgba(146, 102, 214, 0.2)",
				},
				infoStyle: {
					color: "rgb(146, 102, 214)",
				},
			},
			{
				id: 0,
				name: "项目D",
				info: "数据分析工程师",
				url: "http://101.43.140.74:64/",
				source: "https://github.com/JiaZhiheng",
				styleObject: {
					backgroundColor: "rgba(254, 141, 85, 0.2)",
				},
				infoStyle: {
					color: "rgb(254, 141, 85)",
				},
			},
		],
	});
</script>
<style scoped>
	.box {
		display: flex;
		margin: 0 auto;
		width: 1152px;
	}
	.box-item {
		width: 272px;
		height: 230px;
		background-color: aquamarine;
		margin: 8px;
	}
</style>
