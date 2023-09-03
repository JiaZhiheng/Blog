<template>
	<div class="container" :class="type">
		<div class="content" ref="slots">
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
</template>
<script setup>
	import { ref, watch, computed, onMounted, onUnmounted } from "vue";

	const props = defineProps({
		type: {
			type: String, // 轮播图类型
			required: true,
			validator: (value) => {
				return ["fade", "vertical", "horizontal"].includes(value);
			},
		},
		direction: {
			type: Boolean,
			default: true,
		}, // 轮播方向
		showDots: {
			// 是否显示轮播点
			type: Boolean,
			default: false,
		},
		showArrow: {
			// 是否显示轮播箭头
			type: Boolean,
			default: false,
		},
		cardNum: Number, // 卡片数量
		showCardNum: Number, // 显示卡片数量
		interval: {
			// 轮播间隔
			type: Number,
			default: 4000,
		},
		transitionDuration: Number, // 轮播动画时长
		immediate: Boolean, // 是否立即开始轮播
	});

	const indexCounter = ref(0);
	const playIntervalId = ref(null);
	const slots = ref(null);

	const config = computed(() => {
		return generateCardArray(props.cardNum, props.showCardNum);
	});

	const itemClass = computed(() => {
		return (index) => {
			const adjustedIndex = (index + indexCounter.value) % config.value.length;
			return config.value[adjustedIndex].className;
		};
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
	function to (index) {
		indexCounter.value = (config.value.length - index) % config.value.length;
		stopPlay();
		startPlay();
	};

	// 滑动至前一页 (手动)
	function prev() {
		to(getCurrentIndex() - 1);
	};

	// 滑动至后一页 (手动)
	function next() {
		to(getCurrentIndex() + 1);
	};

	// 获取当前页
	function getCurrentIndex() {
		return (config.value.length - indexCounter.value) % config.value.length;
	}

	// 开始播放
	function startPlay() {
		if (props.direction) {
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
		updateCardItems();
		setTimeout(() => {
			if (props.immediate) {
				if (props.direction) {
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

<style scoped>
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
	.container:hover .dots {
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
	.container:hover .arrow-prev,
	.container:hover .arrow-next {
		transform: translateX(0) translateY(-50%);
		opacity: 1;
	}
</style>
