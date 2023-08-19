<template>
	<div class="ver">
		<div class="vert">
			<figure
				class="item"
				:style="item.style"
				v-for="item in verticalConfig"
				:key="item.id"
			>
				<a :href="item.url" target="_blank">
					<img v-if="false" class="background" :src="item.src" alt="" />
					<div class="hover"></div>
					<div class="title">
						<div>
							<h2>{{ item.name }}</h2>
							<h4>在线预览</h4>
						</div>
					</div>
					<figcaption>
						<p>{{ item.info }}</p>
					</figcaption>
				</a>
			</figure>
		</div>
	</div>
</template>
<script setup>
	import { reactive, onMounted, onUnmounted } from "vue";
	import { verticalConfig } from "@/components/carousel/carousel.config";

	const data = reactive({
		timeInter: null,
	});

	// 组件挂载
	onMounted(() => {
		class vertical {
			/* 构造函数 */
			constructor(options) {
				const defaultOptions = {
					element: document.querySelector(".vert"),
					height: "calc(100% - 16px)",
					index: 0,
					interval: 4000,
				};
				this.options = Object.assign({}, defaultOptions, options); // 同名属性替换
				this.initHorizontal();
				this.playHorizontal();
			}

			/* 初始化轮播图 */
			initHorizontal() {
				this.initHorizontalContainer();
				this.initHorizontalItemsAndDots();
			}

			/* 初始化轮播容器 */
			initHorizontalContainer() {
				this.container = this.options.element;
				this.container.style.height = this.options.height;
				const itemContainer = document.createElement("div");
				itemContainer.setAttribute("class", "items");
				itemContainer.setAttribute("style", "height: 100%");
				this.itemContainer = itemContainer;
			}

			/* 初始化轮播图面板和轮播点面板 */
			initHorizontalItemsAndDots() {
				this.items = this.container.querySelectorAll(".item");
				this.items[this.options.index].classList.add("active-x");
				this.items[(this.options.index + 1) % this.items.length].classList.add(
					"active-y"
				);
				this.items.forEach((item) => {
					this.itemContainer.appendChild(item);
				});
				this.container.appendChild(this.itemContainer);
			}

			/* 获取 上一项/当前项(X)/当前项(Y)/下一项 索引 */
			getPrevIndex() {
				return (
					(this.getCurrentXIndex() - 1 + this.items.length) % this.items.length
				);
			}
			
			getCurrentXIndex() {
				return [...this.items].indexOf(
					this.container.querySelector(".item.active-x")
				);
			}

			getCurrentYIndex() {
				return [...this.items].indexOf(
					this.container.querySelector(".item.active-y")
				);
			}

			getNextIndex() {
				return (this.getCurrentYIndex() + 1) % this.items.length;
			}

			/* 开始轮播 */
			playHorizontal() {
				const playInterval = () => {
					this.setHorizontal(
						this.getPrevIndex(),
						this.getCurrentXIndex(),
						this.getCurrentYIndex(),
						this.getNextIndex()
					);
				};

				const startPlay = () => {
					this.playIntervalId = setInterval(playInterval, 4000);
				};

				const stopPlay = () => {
					clearInterval(this.playIntervalId);
				};

				// 页面可见性状态改变时触发的回调函数
				const handleVisibilityChange = () => {
					if (document.hidden) {
						// 页面切出，暂停播放
						stopPlay();
					} else {
						// 页面切回，继续播放
						startPlay();
					}
				};

				// 添加可见性状态改变事件监听器
				document.addEventListener("visibilitychange", handleVisibilityChange);

				// 初始化时调用一次，根据初始页面状态执行操作
				setTimeout(() => {
					handleVisibilityChange();
				}, 1400);
			}

			/* 设置轮播图 */
			setHorizontal(fromIndex, currentXIndex, currentYIndex, toIndex) {
				this.from = this.items[fromIndex];
				this.currentX = this.items[currentXIndex];
				this.currentY = this.items[currentYIndex];
				this.to = this.items[toIndex];
				this.setHorizontalItem();
			}

			/* 设置轮播面板 */
			setHorizontalItem() {
				this.to.setAttribute("class", `item next`);
				this.from.setAttribute("class", `item prev`);
				this.currentX.setAttribute("class", `item active-x`);
				this.currentY.setAttribute("class", `item active-y`);

				this.container.offsetHeight; // 原因：触发回流使轮播图流畅
				this.resetHorizontalItem();
			}

			/* 重置轮播面板 */
			resetHorizontalItem() {
				const callback = () => {
					this.from.setAttribute("class", "item");
					this.currentX.setAttribute("class", "item prev");
					this.currentY.setAttribute("class", "item active-x");
					this.to.setAttribute("class", "item active-y");
				};
				callback();
			}
		}

		/* 声明轮播图 */
		new vertical();
	});

	// 组件卸载
	onUnmounted(() => {
		// clearInterval(data.timeInter);
		// data.timeInter = null;
	});
</script>
<style scoped>
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

	*,
	*::after,
	*::before {
		transition: all 0.25s ease;
	}

	.ver {
		flex: 1;
		height: 100%;
		border-radius: 12px;
		padding: 0 8px;
		position: relative;
		overflow: hidden;
	}
	.vert {
		position: relative;
		margin: 8px 0;
		overflow: hidden;
		border-radius: 12px;
		transform: rotate(0);
		-webkit-transform: rotate(0);
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

	.item figcaption {
		position: absolute;
		bottom: 42%;
		left: 25px;
		text-align: left;
		opacity: 0;
		padding: 5px 60px 5px 10px;
		font-weight: 500;
		letter-spacing: 1.5px;
	}

	.item figcaption p {
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

	.item:hover figcaption {
		opacity: 1;
		transition-delay: 0.1s;
	}

	.items {
		height: 100%;
		overflow: hidden;
	}

	.item.active-x,
	.item.active-y,
	.item.next,
	.item.prev {
		display: block;
	}
	/* 上一页 */
	.item.prev {
		transform: translateY(calc(-100% - 16px));
	}
	/* 当前页 */
	.item.active-x {
		transform: translateY(0);
	}
	.item.active-y {
		transform: translateY(calc(100% + 16px));
	}
	/* 下一页 */
	.item.next {
		transform: translateY(calc(200% + 32px));
	}
</style>
