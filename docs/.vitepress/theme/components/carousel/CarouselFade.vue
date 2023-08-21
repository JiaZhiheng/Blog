<template>
	<div class="swiper-horizontal">
		<div class="horizontal">
			<div class="horizontal-items">
				<div
					class="horizontal-item"
					:class="itemClass(index)"
					v-for="(item, index) in fadeConfig"
					:key="item.id"
				>
					<div class="demo-item" :style="item.styleObject">
						<h1 class="item-name" :style="item.infoStyle">{{ item.name }}</h1>
						<p class="item-info" :style="item.infoStyle">{{ item.info }}</p>
						<a
							class="item-url"
							:style="item.infoStyle"
							:href="item.url"
							target="_blank"
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
				</div>
			</div>
			<ul class="horizontal-dots">
				<li
					class="horizontal-dot"
					:class="itemClass(index)"
					v-for="(item, index) in fadeConfig"
					:key="item.id"
					@click="to(index)"
				></li>
			</ul>
			<div class="horizontal-arrows">
				<div class="horizontal-arrow arrow-prev" @click="prev">
					<svg
						width="2em"
						height="2em"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.5397 3.53998L10.4589 4.45922L6.91856 7.9996L10.4589 11.54L9.5397 12.4592L5.08008 7.9996L9.5397 3.53998Z"
							fill="#fff"
							fill-opacity="0.9"
						></path>
					</svg>
				</div>
				<div class="horizontal-arrow arrow-next" @click="next">
					<svg
						width="2em"
						height="2em"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.4603 12.4592L5.54106 11.54L9.08144 7.99961L5.54106 4.45923L6.4603 3.53999L10.9199 7.99961L6.4603 12.4592Z"
							fill="#fff"
							fill-opacity="0.9"
						></path>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, computed, onMounted, onUnmounted } from "vue";
	import { fadeConfig } from "@/components/carousel/carousel.config";
	
	const classNames = ["active", "next", "", "prev"];

	const indexCounter = ref(0);
	const playIntervalId = ref(null);

	const itemClass = computed(() => {
		return (index) => {
			const adjustedIndex = (index + indexCounter.value) % classNames.length;
			return classNames[adjustedIndex];
		};
	});

	function prev() {
		indexCounter.value = (indexCounter.value + 1) % classNames.length;
	}

	function next() {
		indexCounter.value = (indexCounter.value - 1 + classNames.length) % classNames.length;
	}

	function to(index) {
		indexCounter.value = classNames.length - index
		clearInterval(playIntervalId.value);
		startPlay();
	}

	function startPlay() {
		playIntervalId.value = setInterval(next, 4000);
	}

	onMounted(() => {
		setTimeout(() => {
			startPlay();
		}, 1400);
	});

	onUnmounted(() => {
		clearInterval(playIntervalId.value);
	});
</script>

<style scoped>
	.swiper-horizontal {
		flex: 3;
	}

	.horizontal {
		position: relative;
		overflow: hidden;
		border-radius: 12px;
		padding: 8px;
		height: 100%;
	}

	.horizontal-items {
		height: 100%;
		position: relative;
	}

	.horizontal-item {
		display: none;
		position: absolute;
		width: 100%;
		height: 100%;
		transition: all 0.4s;
		border-radius: 12px;
	}

	.horizontal-item.active,
	.horizontal-item.prev,
	.horizontal-item.next {
		display: block;
	}

	.horizontal-item.active {
		opacity: 1;
	}

	.horizontal-item.prev,
	.horizontal-item.next {
		opacity: 0;
	}

	.horizontal-dots {
		position: absolute;
		display: flex;
		z-index: 1;
		left: 50%;
		bottom: 18px;
		transform: translateX(-50%);
		list-style: none;
		margin: 0;
		padding: 0;
		opacity: 0;
		transition: all 0.3s;
	}
	.horizontal:hover .horizontal-dots {
		opacity: 1;
	}
	.horizontal-dot {
		margin: 0 4px;
		cursor: pointer;
	}
	.horizontal-dot::before {
		content: "";
		display: block;
		width: 16px;
		height: 4px;
		border-radius: 2px;
		background: rgba(255, 255, 255, 0.3);
		transition: all 0.3s;
	}
	.horizontal-dot.active::before {
		width: 24px;
		background: rgba(255, 255, 255, 1);
	}

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

	.horizontal-arrow {
		position: absolute;
		top: 50%;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		border: none;
		border-radius: 4px;
		background: transparent;
		opacity: 0;
		transition: all 0.3s;
		outline: none;
		cursor: pointer;
	}
	.horizontal-arrow.arrow-prev {
		left: 10px;
		transform: translateX(-10px) translateY(-50%);
	}
	.horizontal-arrow.arrow-next {
		right: 10px;
		transform: translateX(10px) translateY(-50%);
	}
	.horizontal-arrow:hover {
		background: rgba(255, 255, 255, 0.3);
	}
	.horizontal:hover .horizontal-arrow.arrow-prev {
		transform: translateX(0) translateY(-50%);
		opacity: 1;
	}
	.horizontal:hover .horizontal-arrow.arrow-next {
		transform: translateX(0) translateY(-50%);
		opacity: 1;
	}
</style>
