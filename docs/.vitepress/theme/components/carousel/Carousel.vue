<template>
	<div :class="wrapper">
		<div :class="container">
			<div :class="content" ref="slots">
				<slot></slot>
			</div>
			<ul class="dots" v-if="showDots">
				<li
					class="dot"
					:class="itemClass(index)"
					v-for="(item, index) in config"
					:key="item.id"
					@click="to(index)"
				></li>
			</ul>
			<div v-if="showArrow">
				<div class="arrow arrow-prev" @click="prev">
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
				<div class="arrow arrow-next" @click="next">
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
	import { ref, watch, computed, onMounted, onUnmounted } from "vue";

	const props = defineProps({
		type: String,
		showDots: Boolean,
		showArrow: Boolean,
		cardNum: Number,
		showCardNum: Number,
	});

	const classMappings = {
		fade: {
			wrapper: "fade-carousel-wrapper",
			container: "fade-carousel-container",
			content: "fade-carousel-content",
		},
		vertical: {
			wrapper: "vertical-carousel-wrapper",
			container: "vertical-carousel-container",
			content: "vertical-carousel-content",
		},
		horizontal: {
			wrapper: "horizontal-carousel-wrapper",
			container: "horizontal-carousel-container",
			content: "horizontal-carousel-content",
		},
	};
	const { wrapper, container, content } = classMappings[props.type];

	const indexCounter = ref(0);
	const playIntervalId = ref(null);
	const config = ref(generateCardArray(props.cardNum, props.showCardNum));
	const slots = ref(null);

	watch(() => indexCounter.value, updateCarouselItems);

	const itemClass = computed(() => {
		return (index) => {
			const adjustedIndex = (index + indexCounter.value) % config.value.length;
			return config.value[adjustedIndex].className;
		};
	});

	function generateCardArray(cardNum, showCardNum) {
		const cardArray = [];
		let id = 1;
		for (let i = 0; i < cardNum; i++) {
			const item = {
				id: id,
				className: "",
			};
			if (i < showCardNum) {
				item.className = `item active-${String.fromCharCode(65 + i)}`;
			} else if (i === showCardNum) {
				item.className = "item next";
			} else if (i < cardNum - 1) {
				item.className = "item";
			} else {
				item.className = "item prev";
			}
			cardArray.push(item);
			id++;
		}
		return cardArray;
	}

	function updateCarouselItems() {
		const slotElements = Array.from(slots.value.children);
		slotElements.forEach((slotElement, slotIndex) => {
			config.value.forEach((configItem) => {
				if (
					slotIndex ===
					(configItem.id - indexCounter.value + config.value.length) %
						config.value.length
				) {
					slotElement.className = configItem.className;
				}
			});
		});
	}

	function toPrev() {
		indexCounter.value = (indexCounter.value + 1) % config.value.length;
	}

	function toNext() {
		indexCounter.value =
			(indexCounter.value - 1 + config.value.length) % config.value.length;
	}

	function to(index) {
		indexCounter.value = config.value.length - index;
		clearInterval(playIntervalId.value);
		startPlay();
	}

	function prev() {
		toPrev();
		clearInterval(playIntervalId.value);
		startPlay();
	}

	function next() {
		toNext();
		clearInterval(playIntervalId.value);
		startPlay();
	}

	function startPlay() {
		playIntervalId.value = setInterval(toNext, 4000);
	}

	onMounted(() => {
		updateCarouselItems();
		setTimeout(() => {
			startPlay();
		}, 1400);
	});

	onUnmounted(() => {
		clearInterval(playIntervalId.value);
	});
</script>

<style scoped>
	/* 渐隐轮播图 */
	.fade-carousel-wrapper {
		flex: 3;
	}

	.fade-carousel-container {
		height: 100%;
		padding: 8px;
		border-radius: 12px;
		position: relative;
		overflow: hidden;
	}

	.fade-carousel-content {
		height: 100%;
		position: relative;
	}

	/* 垂直轮播图 */
	.vertical-carousel-wrapper {
		flex: 1;
		height: 100%;
		border-radius: 12px;
		padding: 0 8px;
		position: relative;
		overflow: hidden;
	}

	.vertical-carousel-container {
		position: relative;
		margin: 8px 0;
		overflow: hidden;
		border-radius: 12px;
		transform: rotate(0);
		-webkit-transform: rotate(0);
		height: calc(100% - 16px);
	}

	.vertical-carousel-content {
		height: 100%;
		overflow: hidden;
	}

	/* 水平轮播图 */
	.horizontal-carousel-wrapper {
		flex: 1;
		height: 100%;
		border-radius: 12px;
		position: relative;
		overflow: hidden;
	}

	.horizontal-carousel-container {
		height: calc(100% - 16px);
		width: calc(100% - 16px);
		margin: 8px auto;
		border-radius: 12px;
		overflow: hidden;
		position: relative;
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}

	.horizontal-carousel-content {
		width: 1280px;
		height: 100%;
		position: absolute;
		transform: translateX(-8px);
	}

	/* 轮播点 */
	.dots {
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
	.fade-carousel-container:hover .dots {
		opacity: 1;
	}
	.dot {
		margin: 0 4px;
		cursor: pointer;
	}
	.dot::before {
		content: "";
		display: block;
		width: 16px;
		height: 4px;
		border-radius: 2px;
		background: rgba(255, 255, 255, 0.3);
		transition: all 0.3s;
	}
	.dot.active-A::before {
		width: 24px;
		background: rgba(255, 255, 255, 1);
	}

	/* 轮播箭头 */
	.arrow {
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
	.arrow-prev {
		left: 10px;
		transform: translateX(-10px) translateY(-50%);
	}
	.arrow-next {
		right: 10px;
		transform: translateX(10px) translateY(-50%);
	}
	.arrow:hover {
		background: rgba(255, 255, 255, 0.3);
	}
	.fade-carousel-container:hover .arrow-prev,
	.fade-carousel-container:hover .arrow-next {
		transform: translateX(0) translateY(-50%);
		opacity: 1;
	}
</style>
