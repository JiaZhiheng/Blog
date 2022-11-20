<template>
	<hero></hero>
	<div class="swiper" id="swiper">
		<horizontal></horizontal>
		<vertical></vertical>
	</div>
</template>
<script setup>
	import { onMounted } from "vue";
	import hero from "./components/hero.vue";
	import horizontal from "./components/horizontal.vue";
	import vertical from "./components/vertical.vue";
	// 生命周期钩子
	onMounted(() => {
		/* 载入轮播图 */
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

		// 将 features 的 icon 替换为图片
		let icon = [];
		Array.from(document.querySelectorAll(".box")).forEach((item) => {
			icon.push(item.children[0]);
		});
		icon.forEach((item) => {
			let img = document.createElement("img");
			img.src = item.innerHTML;
			item.innerHTML = "";
			item.appendChild(img);
		});

		/* 将图片替换为动画svg */
		let parentNode = Array.from(
			document.getElementsByClassName("image-container")
		)[0];
		let picture = Array.from(
			document.getElementsByClassName("VPImage image-src")
		)[0];
		parentNode.replaceChild(svg, picture);
	});
</script>
