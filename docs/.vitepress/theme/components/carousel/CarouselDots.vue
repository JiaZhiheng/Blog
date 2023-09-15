<template>
  <ul class="dots">
    <li
			class="dot"
      :class="getItemClass(index)"
      v-for="(item, index) in config"
      :key="item.id"
      @click="to(index)"
    ></li>
  </ul>
</template>

<script setup>
const props = defineProps({
  cardNum: Number,
  slidesPerView: Number,
  indexCounter: Number,
});

const emit = defineEmits(["to"]);

const config = generateCardArray(props.cardNum, props.slidesPerView);

function generateCardArray(cardNum, slidesPerView) {
  const cardArray = [];
  for (let i = 0; i < cardNum; i++) {
		i < slidesPerView ? cardArray.push("current") : cardArray.push(""); 
  }
  return cardArray;
}

function getItemClass(index) {
  return config[(index + props.indexCounter) % config.length];
}

function to(index) {
  emit("to", index);
}
</script>

<style scoped lang="scss">
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

		.container:hover & {
			opacity: 1;
		}

		.dot {
			margin: 0 4px;
			cursor: pointer;

			&::before {
				content: "";
				display: block;
				width: 16px;
				height: 4px;
				border-radius: 2px;
				background: rgba(255, 255, 255, 0.3);
				transition: all 0.3s;
			}

			&.current::before {
				width: 24px;
				background: rgba(255, 255, 255, 1);
			}
		}
	}
</style>
