<template>
	<div class="ver">
		<div class="horizon" ref="horizon">
			<div class="items">
				<div
					:class="getItemClasses(index)"
					v-for="(item, index) in horizontalConfig"
					:key="item.id"
					ref="carousel"
				>
					<div class="item-in" :style="item.style">
						<span>{{ item.name }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue";
	import { horizontalConfig } from "@/components/carousel/carousel.config";

	const horizon = ref(null);
	const carousel = ref([]);
	const classNames = [
		"item active-A",
		"item active-B",
		"item active-C",
		"item active-D",
		"item next",
		"item",
		"item",
		"item prev",
	];
	const playIntervalId = ref(null);

	// 获取项目的类名
	function getItemClasses(index) {
		return [classNames[index]];
	}

	// 移动数组中的项目
	function shiftArrayItems() {
		classNames.unshift(classNames.pop());
	}

	// 为给定的项目设置类名
	function setItemClass(item, index) {
		item.setAttribute("class", classNames[index]);
	}

	// 播放水平轮播
	function playHorizontal() {
		shiftArrayItems();
		carousel.value.forEach(setItemClass);
	}

	// 开始播放轮播
	function startPlay() {
		playHorizontal();
		playIntervalId.value = setInterval(playHorizontal, 4000);
	}

	// 组件生命周期钩子
	onMounted(() => {
		setTimeout(() => {
			startPlay()
		}, 1400); // 入场效果需要 1400ms
	});
</script>

<style scoped>
	.ver {
		flex: 1;
		height: 100%;
		border-radius: 12px;
		position: relative;
		overflow: hidden;
	}
	.horizon {
		height: calc(100% - 16px);
		width: calc(100% - 16px);
		margin: 8px auto;
		border-radius: 12px;
		overflow: hidden;
		position: relative;
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
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

	.items {
		width: 1280px;
		height: 100%;
		position: absolute;
		transform: translateX(-8px);
	}

	.item {
		display: none;
		width: 25%;
		height: 100%;
		padding: 0 8px;
		position: absolute;
		transition: all 4s linear;
	}

	.item.active-A,
	.item.active-B,
	.item.active-C,
	.item.active-D,
	.item.next,
	.item.prev {
		display: block;
	}
	/* 上一页 */
	.item.prev {
		transform: translate(calc(-100% - 0px), -0px);
	}
	/* 当前页 */
	.item.active-A {
		transform: translate(calc(0% - 0px), -0px);
	}
	.item.active-B {
		transform: translate(calc(100% - 0px), -0px);
	}
	.item.active-C {
		transform: translate(calc(200% - 0px), -0px);
	}
	.item.active-D {
		transform: translate(calc(300% - 0px), -0px);
	}
	/* 下一页 */
	.item.next {
		transform: translate(calc(400% - 0px), -0px);
	}
</style>
