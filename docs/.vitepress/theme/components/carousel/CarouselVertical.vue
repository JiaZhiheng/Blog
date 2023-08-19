<template>
	<div class="ver" ref="vertical">
		<div class="vert">
			<div class="itmes" ref="items"></div>
			<figure
				:class="getItemClasses(index)"
				v-for="(item, index) in verticalConfig"
				:key="item.id"
				:style="item.style"
				ref="carousel"
			>
				<a :href="item.url" target="_blank">
					<img v-if="false" class="background" :src="item.src" alt="" />
					<div class="hover"></div>
					<div class="title">
						<div>
							<h2>{{ item.name }}</h2>
							<h4>在线预览</h4>
						</div>
					</div>
					<figcaption>
						<p>{{ item.info }}</p>
					</figcaption>
				</a>
			</figure>
		</div>
	</div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
	import { verticalConfig } from "@/components/carousel/carousel.config";

	const vertical = ref(null);
	const items = ref(null);
	const carousel = ref([]);
	const classNames = [
		"item active-x",
		"item active-y",
		"item next",
		"item",
		"item",
		"item",
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

	// 播放垂直轮播
	function playVertical() {
		shiftArrayItems();
		carousel.value.forEach(setItemClass);
	}

	// 开始播放轮播
	function startPlay() {
		playVertical();
		playIntervalId.value = setInterval(playVertical, 4000);
	}

	// 组件挂载
	onMounted(() => {
		setTimeout(() => {
			startPlay();
		}, 1400); // 入场效果需要 1400ms
	});
</script>
<style scoped>
	.hover {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0;
	}

	.item:hover .hover {
		opacity: 1;
	}

	*,
	*::after,
	*::before {
		transition: all 0.25s ease;
	}

	.ver {
		flex: 1;
		height: 100%;
		border-radius: 12px;
		padding: 0 8px;
		position: relative;
		overflow: hidden;
	}
	.vert {
		position: relative;
		margin: 8px 0;
		overflow: hidden;
		border-radius: 12px;
		transform: rotate(0);
		-webkit-transform: rotate(0);
		height: calc(100% - 16px);
	}
	.background {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}

	.item {
		display: none;
		position: absolute;
		width: 100%;
		height: calc(50% - 8px);
		transition: all 0.3s linear;
		background-color: transparent;
		overflow: hidden;
		color: #fff;
		text-align: center;
		font-size: 16px;
		border-radius: 12px;
		cursor: pointer;
	}

	.item img {
		max-width: 100%;
		backface-visibility: hidden;
		vertical-align: top;
		opacity: 0.9;
	}

	.item .title {
		position: absolute;
		top: 58%;
		left: 25px;
		padding: 5px 10px 10px;
	}

	.item .title:before,
	.item .title:after {
		height: 2px;
		width: 400px;
		position: absolute;
		content: "";
		background-color: #fff;
	}

	.item .title:before {
		top: 0;
		left: 10px;
		transform: translateX(100%);
	}

	.item .title:after {
		bottom: 0;
		right: 10px;
		transform: translateX(-100%);
	}

	.item .title div:before,
	.item .title div:after {
		width: 2px;
		height: 300px;
		position: absolute;
		content: "";
		background-color: #fff;
	}

	.item .title div:before {
		top: 10px;
		right: 0;
		transform: translateY(100%);
	}

	.item .title div:after {
		bottom: 10px;
		left: 0;
		transform: translateY(-100%);
	}

	.item h2 {
		margin: 0;
		font-weight: 400;
	}

	.item h4 {
		margin: 0;
		display: block;
		font-weight: 700;
		background-color: #ffffff;
		padding: 5px 10px;
		color: #000000;
	}

	.item figcaption {
		position: absolute;
		bottom: 42%;
		left: 25px;
		text-align: left;
		opacity: 0;
		padding: 5px 60px 5px 10px;
		font-weight: 500;
		letter-spacing: 1.5px;
	}

	.item figcaption p {
		margin: 0;
	}

	.item a {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.item:hover img {
		/* opacity: 0.35; */
	}

	.item:hover .title:before,
	.item:hover .title:after,
	.item:hover .title div:before,
	.item:hover .title div:after {
		transform: translate(0, 0);
	}

	.item:hover .title:before,
	.item:hover .title:after {
		transition-delay: 0.05s;
	}

	.item:hover figcaption {
		opacity: 1;
		transition-delay: 0.1s;
	}

	.items {
		height: 100%;
		overflow: hidden;
	}

	.item.active-x,
	.item.active-y,
	.item.next,
	.item.prev {
		display: block;
	}
	/* 上一页 */
	.item.prev {
		transform: translateY(calc(-100% - 16px));
	}
	/* 当前页 */
	.item.active-x {
		transform: translateY(0);
	}
	.item.active-y {
		transform: translateY(calc(100% + 16px));
	}
	/* 下一页 */
	.item.next {
		transform: translateY(calc(200% + 32px));
	}
</style>
