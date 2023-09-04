<template>
	<div class="content" ref="slots">
		<slot></slot>
	</div>
</template>
<script setup>
	import { ref, watch, onMounted } from "vue";
	const slots = ref(null);

	const props = defineProps({
		config: Array,
		indexCounter: Number,
		transitionStyle: String,
	});

	watch(
		() => props.indexCounter,
		() => {
			updateCardItemStyles(props.indexCounter);
		}
	);

	function applyTransitionStyles() {
		const slotElements = Array.from(slots.value.children);
		slotElements.forEach((slotElement) => {
			slotElement.style.transition = props.transitionStyle;
		});
	}

	function updateCardItemStyles() {
		const slotElements = Array.from(slots.value.children);
		slotElements.forEach((slotElement, slotIndex) => {
			props.config.forEach((configItem) => {
				if (
					slotIndex ===
					(configItem.id + props.config.length - props.indexCounter - 1) %
						props.config.length
				) {
					slotElement.className = configItem.className;
				}
			});
		});
	}

	onMounted(() => {
		applyTransitionStyles();
		updateCardItemStyles();
	});
</script>
<style scoped lang="scss">
	.content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		border-radius: 12px;
		transform: rotate(0);
	}
</style>
