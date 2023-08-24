<template>
	<div :style="item.style" class="item">
		<a :href="item.url" target="_blank">
			<img v-if="false" class="background" :src="item.src" alt="" />
			<div class="hover"></div>
			<div class="title">
				<div>
					<h2>{{ item.name }}</h2>
					<h4>在线预览</h4>
				</div>
			</div>
			<div class="figcaption">
				<p>{{ item.info }}</p>
			</div>
		</a>
	</div>
</template>
<script setup>
	const props = defineProps({
		item: Object,
	});
</script>
<style scoped>
	*,
	*::after,
	*::before {
		transition: all 0.25s ease;
	}

	.hover {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0;
	}

	.item:hover .hover {
		opacity: 1;
	}

	.background {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}

	.item {
		display: none;
		position: absolute;
		width: 100%;
		height: calc(50% - 8px);
		transition: all 0.3s linear;
		background-color: transparent;
		overflow: hidden;
		color: #fff;
		text-align: center;
		font-size: 16px;
		border-radius: 12px;
		cursor: pointer;
	}

	.item img {
		max-width: 100%;
		backface-visibility: hidden;
		vertical-align: top;
		opacity: 0.9;
	}

	.item .title {
		position: absolute;
		top: 58%;
		left: 25px;
		padding: 5px 10px 10px;
	}

	.item .title:before,
	.item .title:after {
		height: 2px;
		width: 400px;
		position: absolute;
		content: "";
		background-color: #fff;
	}

	.item .title:before {
		top: 0;
		left: 10px;
		transform: translateX(100%);
	}

	.item .title:after {
		bottom: 0;
		right: 10px;
		transform: translateX(-100%);
	}

	.item .title div:before,
	.item .title div:after {
		width: 2px;
		height: 300px;
		position: absolute;
		content: "";
		background-color: #fff;
	}

	.item .title div:before {
		top: 10px;
		right: 0;
		transform: translateY(100%);
	}

	.item .title div:after {
		bottom: 10px;
		left: 0;
		transform: translateY(-100%);
	}

	.item h2 {
		margin: 0;
		font-weight: 400;
	}

	.item h4 {
		margin: 0;
		display: block;
		font-weight: 700;
		background-color: #ffffff;
		padding: 5px 10px;
		color: #000000;
	}

	.item .figcaption {
		position: absolute;
		bottom: 42%;
		left: 25px;
		text-align: left;
		opacity: 0;
		padding: 5px 60px 5px 10px;
		font-weight: 500;
		letter-spacing: 1.5px;
	}

	.item .figcaption p {
		margin: 0;
	}

	.item a {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.item:hover img {
		/* opacity: 0.35; */
	}

	.item:hover .title:before,
	.item:hover .title:after,
	.item:hover .title div:before,
	.item:hover .title div:after {
		transform: translate(0, 0);
	}

	.item:hover .title:before,
	.item:hover .title:after {
		transition-delay: 0.05s;
	}

	.item:hover .figcaption {
		opacity: 1;
		transition-delay: 0.1s;
	}
</style>
