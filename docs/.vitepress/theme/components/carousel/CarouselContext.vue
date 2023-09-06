<template>
	<div class="content" :class="type">
		<template
			v-for="(slotContent, index) in $slots.default()[0].children[0].children"
		>
			<Transition>
				<div :class="itemClass(index)" :style="{ transition: transitionStyle }">
					<component :is="slotContent"> </component>
				</div>
			</Transition>
		</template>
	</div>
</template>
<script setup>
	import { computed } from "vue";

	const props = defineProps({
		type: String,
		config: Array,
		indexCounter: Number,
		transitionStyle: String,
	});

	const itemClass = computed(() => {
		return (index) => {
			const adjustedIndex = (index + props.indexCounter) % props.config.length;
			return props.config[adjustedIndex].className;
		};
	});
</script>

<style scoped lang="scss">
	$space-between: 16px;
	$card-num: 8;
	$show-card-num: 4;

	.content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		border-radius: 12px;
		transform: rotate(0);
		cursor: pointer;
	}

	@mixin common-item-styles {
		display: none;
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}

	.fade {
		.item {
			@include common-item-styles;

			&.active-A,
			&.prev,
			&.next {
				display: block;
			}

			&.active-A {
				opacity: 1;
			}

			&.prev,
			&.next {
				opacity: 0;
			}
		}
	}

	.horizontal {
		.item {
			@include common-item-styles;
			width: calc(25% - 12px);

			&.active-A,
			&.active-B,
			&.active-C,
			&.active-D,
			&.next,
			&.prev {
				display: block;
			}

			&.prev {
				transform: translateX(calc(-100% - 16px));
			}

			&.active-A {
				transform: translateX(0);
			}

			&.active-B {
				transform: translateX(calc(100% + 16px));
			}

			&.active-C {
				transform: translateX(calc(200% + 32px));
			}

			&.active-D {
				transform: translateX(calc(300% + 48px));
			}

			&.next {
				transform: translateX(calc(400% + 64px));
			}
		}
	}

	.vertical {
		.item {
			@include common-item-styles;
			height: calc(50% - 8px);

			&.active-A,
			&.active-B,
			&.next,
			&.prev {
				display: block;
			}

			&.prev {
				transform: translateY(calc(-100% - 16px));
			}

			&.active-A {
				transform: translateY(0);
			}

			&.active-B {
				transform: translateY(calc(100% + 16px));
			}

			&.next {
				transform: translateY(calc(200% + 32px));
			}
		}
	}
</style>
