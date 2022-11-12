<template>
	<iframe
		id="iframe"
		class="iframe"
		src="/贾志恒-塔里木大学-网络工程.pdf"
	></iframe>
	<a id="aaa">打印简历</a>
	<a
		href="/贾志恒-塔里木大学-网络工程.pdf" target="_blank"
		>预览简历</a
	>
	<a
		href="/贾志恒-塔里木大学-网络工程.pdf"
		download="贾志恒-塔里木大学-网络工程"
		>下载简历</a
	>
</template>
<script setup>
	import { onMounted } from "vue";
	onMounted(() => {
		let aaa = document.getElementById("aaa");
		let printIframe = document.getElementById("iframe");
		console.log(printIframe);
		// 打印
		aaa.onclick = function () {
			printIframe.contentWindow.print();
		};

		// 调整大小
		printIframe.style.height = window.innerHeight + "px";
		printIframe.style.width = window.innerWidth + "px";
	});
</script>
<style scoped>
	.iframe {
		margin: 20px auto;
		display: block;
		border: none;
		padding: 20px 200px;
	}
</style>
