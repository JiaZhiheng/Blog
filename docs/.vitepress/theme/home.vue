<template>
	<hero></hero>
</template>
<script setup>
	import { onMounted } from "vue";
	import hero from "./components/hero.vue";
	// 生命周期钩子
	onMounted(() => {
		let container = Array.from(document.getElementsByClassName("container"))[3];
		let swiper = document.getElementById("swiper");
		container.appendChild(swiper);
		/* 展示我的项目 */
		container.setAttribute(
			"style",
			"display: flex;margin: 0 auto;max-width: 1152px;position: relative;transform-style: preserve-3d;transition: 0.8s;backface-visibility: hidden;"
		);
		Array.from(
			document.getElementsByClassName("VPButton medium brand")
		)[0].onclick = function () {
			if (document.body.clientWidth < 960) {
				let url = window.location.href;
				url = url + "guide/project/project.html";
				window.location.href = url;
			} else {
				// 桌面端
				if (container.style.transform == "rotateX(180deg)") {
					container.style.transform = "rotateX(360deg)";
				} else {
					container.style.transform = "rotateX(180deg)";
				}
			}
		};
	});
</script>
<style scoped>
	*,
	::before,
	::after {
		box-sizing: border-box;
	}

	.wrap {
		width: 100%;
		padding: 0 24px;
	}

	.mobile {
		margin: 0 auto;
		max-width: 1152px;
	}

	.laptop {
		display: none;
	}

	@media screen and (min-width: 640px) {
		.wrap {
			padding: 0 48px;
		}
	}

	@media screen and (min-width: 960px) {
		.wrap {
			padding: 0 64px;
		}

		.mobile {
			display: none;
		}
	}
</style>
