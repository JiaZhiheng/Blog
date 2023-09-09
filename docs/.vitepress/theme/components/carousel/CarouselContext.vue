<template>
	<div class="card-container" :class="direction">
		<template
			v-for="(slotContent, index) in $slots.default()[0].children[0].children"
		>
			<div class="card-item" :style="itemStyle(index)">
				<component :is="slotContent"></component>
			</div>
		</template>
	</div>
</template>

<script setup>
	import { computed } from "vue";

	const props = defineProps({
		type: String,
		direction: String,
		effect: String,
		cardNum: Number,
		indexCounter: Number,
		transitionStyle: String,
		slidesPerView: Number,
		spaceBetween: Number,
	});

	const config = generateCardArray(
		props.cardNum,
		props.slidesPerView,
		props.type,
		props.direction,
		props.effect,
		props.spaceBetween
	);

	// 生成卡片数组
	function generateCardArray(
		cardNum,
		slidesPerView,
		type,
		direction,
		effect,
		spaceBetween
	) {
		const cardArray = [];
		const isFade = type === "fade";
		const isVertical = type === "vertical";
		const isHorizontal = type === "horizontal";
		const isTranslating = isVertical || isHorizontal;

		for (let i = 0; i < cardNum; i++) {
			const item = {
				id: i + 1,
				style: { display: "block" },
			};
			const translateValue = `translate${isVertical ? "Y" : "X"}`;

			if (i < slidesPerView) {
				if (isFade) {
					item.style.opacity = 1;
				} else if (isTranslating) {
					item.style.transform = `${translateValue}(calc(${i * 100}% + ${
						i * spaceBetween
					}px))`;
				}
			} else if (i === slidesPerView) {
				if (isFade) {
					item.style.opacity = 0;
				} else if (isTranslating) {
					item.style.transform = `${translateValue}(calc(${i * 100}% + ${
						i * spaceBetween
					}px))`;
				}
			} else if (i < cardNum - 1) {
				item.style.display = "none";
			} else {
				if (isFade) {
					item.style.opacity = 0;
				} else if (isTranslating) {
					item.style.transform = `${translateValue}(calc(-${100}% - ${spaceBetween}px))`;
				}
			}
			cardArray.push(item);
		}

		return cardArray;
	}

	const itemStyle = computed(() => {
		return (index) => {
			const adjustedIndex = (index + props.indexCounter) % config.length;
			return config[adjustedIndex].style;
		};
	});

	const cardSize = `calc(${100 / props.slidesPerView}% - ${
		(props.spaceBetween * (props.slidesPerView - 1)) / props.slidesPerView
	}px)`;
</script>

<style scoped lang="scss">
	.card-container {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		border-radius: 12px;
		transform: rotate(0);
		cursor: pointer;

		&.horizontal {
			.card-item {
				width: v-bind("cardSize");
			}
		}

		&.vertical {
			.card-item {
				height: v-bind("cardSize");
			}
		}
	}

	.card-item {
		display: none;
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		transition: v-bind("transitionStyle");
	}
</style>
