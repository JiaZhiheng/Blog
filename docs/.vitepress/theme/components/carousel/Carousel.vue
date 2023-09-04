<template>
	<div :class="type" class="container">
		<div class="content" ref="slots">
			<slot></slot>
		</div>
		<!-- <carousel-context></carousel-context> -->
		<carousel-dots v-if="showDots" @to="to" :config="config" :index-counter="indexCounter"></carousel-dots>
		<carousel-arrow v-if="showArrow" @prev="prev" @next="next"></carousel-arrow>
	</div>
</template>
<script setup>
	import { ref, watch, computed, onMounted, onUnmounted } from "vue";
	import carouselContext from "./CarouselContext.vue";
	import CarouselArrow from "./CarouselArrow.vue";
	import CarouselDots from "./CarouselDots.vue";

	/**
	 * Props定义，用于接收父组件传递的属性值
	 *
	 * @prop {String} type - 轮播图类型，可选值包括 "fade"、"vertical"、"horizontal"。
	 * @prop {Boolean} turnDirection - 轮播方向，默认为 true。
	 * @prop {Boolean} showDots - 是否显示轮播点，默认为 false。
	 * @prop {Boolean} showArrow - 是否显示轮播箭头，默认为 false。
	 * @prop {Number} cardNum - 卡片数量，必需属性。
	 * @prop {Number} showCardNum - 显示卡片数量，必需属性。
	 * @prop {Number} interval - 轮播间隔，单位毫秒，默认为 4000。
	 * @prop {String} transitionStyle - 过渡效果的样式，单位秒，必需属性。
	 * @prop {Boolean} immediate - 是否立即开始轮播，默认为 false。
	 */
	const props = defineProps({
		type: {
			type: String,
			required: true,
			validator: (value) => {
				return ["fade", "vertical", "horizontal"].includes(value);
			},
		},
		turnDirection: {
			type: Boolean,
			default: true,
		},
		showDots: {
			type: Boolean,
			default: false,
		},
		showArrow: {
			type: Boolean,
			default: false,
		},
		cardNum: {
			type: Number,
			required: true,
		},
		showCardNum: {
			type: Number,
			required: true,
		},
		interval: {
			type: Number,
			default: 4000,
		},
		transitionStyle: {
			type: String,
			required: true,
		},
		immediate: {
			type: Boolean,
			default: false,
		},
	});

	const indexCounter = ref(0);
	const playIntervalId = ref(null);
	const slots = ref(null);

	const config = computed(() => {
		return generateCardArray(props.cardNum, props.showCardNum);
	});

	watch(indexCounter, updateCardItems);

	// 生成卡片数组
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

	// 更新卡片项目
	function updateCardItems() {
		const slotElements = Array.from(slots.value.children);
		slotElements.forEach((slotElement, slotIndex) => {
			config.value.forEach((configItem) => {
				if (
					slotIndex ===
					(configItem.id + config.value.length - indexCounter.value - 1) %
						config.value.length
				) {
					slotElement.className = configItem.className;
				}
			});
		});
	}

	function applyTransitionStyleToElements() {
		const slotElements = Array.from(slots.value.children);
		slotElements.forEach((slotElement) => {
			slotElement.style.transition = props.transitionStyle;
		});
	}

	// 滑动至前一页 (自动)
	function toPrev() {
		indexCounter.value =
			(config.value.length - getCurrentIndex() + 1) % config.value.length;
	}

	// 滑动至后一页 (自动)
	function toNext() {
		indexCounter.value = config.value.length - getCurrentIndex() - 1;
	}

	// 滑动至某一页
	function to(index) {
		indexCounter.value = (config.value.length - index) % config.value.length;
		stopPlay();
		startPlay();
	}

	// 滑动至前一页 (手动)
	function prev() {
		to(getCurrentIndex() - 1);
	}

	// 滑动至后一页 (手动)
	function next() {
		to(getCurrentIndex() + 1);
	}

	// 获取当前页
	function getCurrentIndex() {
		return (config.value.length - indexCounter.value) % config.value.length;
	}

	// 开始播放
	function startPlay() {
		if (props.turnDirection) {
			playIntervalId.value = setInterval(toNext, props.interval);
		} else {
			playIntervalId.value = setInterval(toPrev, props.interval);
		}
	}

	// 暂停播放
	function stopPlay() {
		clearInterval(playIntervalId.value);
	}

	onMounted(() => {
		applyTransitionStyleToElements();
		updateCardItems();
		setTimeout(() => {
			if (props.immediate) {
				if (props.turnDirection) {
					toNext();
				} else {
					toPrev();
				}
			}
			startPlay();
		}, 1400);
	});

	onUnmounted(() => {
		stopPlay();
	});
</script>

<style scoped lang="scss">
	/* 渐隐轮播图 */
	.fade {
		height: 100%;
		width: 100%;
		padding: 8px;
		margin: 0;
	}

	/* 垂直轮播图 */
	.vertical {
		height: calc(100% - 16px);
		width: 100%;
		padding: 0 8px;
		margin: 8px 0;
	}

	/* 水平轮播图 */
	.horizontal {
		height: 100%;
		width: calc(100% - 16px);
		padding: 8px 0;
		margin: 0 8px;
	}

	.content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		border-radius: 12px;
		transform: rotate(0);
	}
</style>
