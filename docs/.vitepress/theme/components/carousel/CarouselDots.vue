<template>
	<ul class="dots">
		<li
			class="dot"
			:class="itemClass(index)"
			v-for="(item, index) in config"
			:key="item.id"
			@click="to(index)"
		></li>
	</ul>
</template>
<script setup>
	import { computed } from "vue";

  const props = defineProps({
    config: Array, 
		indexCounter: Number,
	});

	const itemClass = computed(() => {
		return (index) => {
			const adjustedIndex = (index + props.indexCounter) % props.config.length;
			return props.config[adjustedIndex]?.className;
		};
	});

  const emit = defineEmits(["to"]);

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

			&.active-A::before {
				width: 24px;
				background: rgba(255, 255, 255, 1);
			}
		}
	}
</style>
