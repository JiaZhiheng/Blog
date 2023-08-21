<template>
	<div class="ver">
		<div class="horizon">
			<div class="items">
				<div
					:class="itemClass(index)"
					v-for="(item, index) in horizontalConfig"
					:key="item.id"
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
	import { ref, computed, onMounted, onUnmounted } from "vue";
	import { horizontalConfig } from "@/components/carousel/carousel.config";

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

	const indexCounter = ref(0);
	const playIntervalId = ref(null);

	// 计算属性，为给定的项目设置类名
	const itemClass = computed(() => {
		return (index) => {
			const adjustedIndex = (index + indexCounter.value) % classNames.length;
			return classNames[adjustedIndex];
		};
	});

	// 播放水平轮播
	function next() {
		indexCounter.value = (indexCounter.value - 1 + classNames.length) % classNames.length;
	}

	// 开始播放轮播
	function startPlay() {
		next();
		playIntervalId.value = setInterval(next, 4000);
	}

	// 组件生命周期钩子
	onMounted(() => {
		setTimeout(() => {
			startPlay();
		}, 1400); // 入场效果需要 1400ms
	});

	onUnmounted(() => {
		clearInterval(playIntervalId.value);
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
		transform: translateX(-100%);
	}
	/* 当前页 */
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
	/* 下一页 */
	.item.next {
		transform: translateX(400%);
	}
</style>
