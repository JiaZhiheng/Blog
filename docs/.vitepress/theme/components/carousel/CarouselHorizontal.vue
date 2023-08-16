<template>
	<div class="ver">
		<div class="horizon">
			<div class="item" v-for="item in horizontalConfig">
				<div class="item-in" :style="item.style">
					<span>{{ item.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { reactive, onMounted, onUnmounted } from "vue";
	import { horizontalConfig } from "@/components/carousel/carousel.config";
	const data = reactive({
		timeInter: null,
	});

	// 组件挂载
	onMounted(() => {
		class vertical {
			/* 构造函数 */
			constructor() {
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
				this.container = document.querySelector(".horizon");
				this.container.style.height = "calc(100% - 16px)";
				const itemContainer = document.createElement("div");
				itemContainer.setAttribute("class", "items");
				itemContainer.setAttribute(
					"style",
					"width: 1280px;height: 100%;position:absolute;transform:translateX(-8px);"
				);
				this.itemContainer = itemContainer;
			}

			/* 初始化轮播图面板和轮播点面板 */
			initHorizontalItemsAndDots() {
				this.items = this.container.querySelectorAll(".item");
				this.items[0 % this.items.length].classList.add("active-A");
				this.items[1 % this.items.length].classList.add("active-B");
				this.items[2 % this.items.length].classList.add("active-C");
				this.items[3 % this.items.length].classList.add("active-D");
				this.items.forEach((item) => {
					this.itemContainer.appendChild(item);
				});
				this.container.appendChild(this.itemContainer);
			}

			/* 获取 上一项/当前项(X)/当前项(Y)/下一项 索引 */
			getPrevIndex() {
				return (
					(this.getCurrentAIndex() - 1 + this.items.length) % this.items.length
				);
			}
			getCurrentAIndex() {
				return [...this.items].indexOf(
					this.container.querySelector(".item.active-A")
				);
			}
			getCurrentBIndex() {
				return [...this.items].indexOf(
					this.container.querySelector(".item.active-B")
				);
			}
			getCurrentCIndex() {
				return [...this.items].indexOf(
					this.container.querySelector(".item.active-C")
				);
			}
			getCurrentDIndex() {
				return [...this.items].indexOf(
					this.container.querySelector(".item.active-D")
				);
			}
			getNextIndex() {
				return (this.getCurrentDIndex() + 1) % this.items.length;
			}

			/* 开始轮播 */
			playHorizontal() {
				const playInterval = () => {
					this.setHorizontal(
						this.getPrevIndex(),
						this.getCurrentAIndex(),
						this.getCurrentBIndex(),
						this.getCurrentCIndex(),
						this.getCurrentDIndex(),
						this.getNextIndex()
					);
				};

				const startPlay = () => {
					playInterval(); // 立即执行一次
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
			setHorizontal(
				prevIndex,
				currentAIndex,
				currentBIndex,
				currentCIndex,
				currentDIndex,
				nextIndex
			) {
				this.prev = this.items[prevIndex];
				this.currentA = this.items[currentAIndex];
				this.currentB = this.items[currentBIndex];
				this.currentC = this.items[currentCIndex];
				this.currentD = this.items[currentDIndex];
				this.next = this.items[nextIndex];
				this.prev.setAttribute("class", `item prev`);
				this.currentA.setAttribute("class", `item active-A`);
				this.currentB.setAttribute("class", `item active-B`);
				this.currentC.setAttribute("class", `item active-C`);
				this.currentD.setAttribute("class", `item active-D`);
				this.next.setAttribute("class", `item next`);
				this.container.offsetHeight; // 原因：触发回流使轮播图流畅
				this.prev.setAttribute("class", "item");
				this.currentA.setAttribute("class", "item prev");
				this.currentB.setAttribute("class", "item active-A");
				this.currentC.setAttribute("class", "item active-B");
				this.currentD.setAttribute("class", "item active-C");
				this.next.setAttribute("class", "item active-D");
			}
		}

		/* 声明轮播图 */
		new vertical();
	});
</script>
<style scoped>
	.ver {
		flex: 1;
		height: 100%;
		border-radius: 12px;
		position: relative;
		overflow: hidden;
	}
	.horizon {
		height: calc(100% - 16px);
		width: calc(100% - 16px);
		margin: 8px auto;
		border-radius: 12px;
		overflow: hidden;
		position: relative;
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}

	.item-in {
		height: 100%;
		border-radius: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40px;
		font-weight: bold;
		color: #333;
	}

	.items {
		width: 100%;
		height: calc(100% - 16px);
		overflow: hidden;
		border-radius: 12px;
		transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
	}

	.item {
		display: none;
		width: 25%;
		height: 100%;
		padding: 0 8px;
		position: absolute;
		transition: all 4s linear;
	}

	.item.active-A,
	.item.active-B,
	.item.active-C,
	.item.active-D,
	.item.next,
	.item.prev {
		display: block;
	}
	/* 上一页 */
	.item.prev {
		transform: translate(calc(-100% - 0px), -0px);
	}
	/* 当前页 */
	.item.active-A {
		transform: translate(calc(0% - 0px), -0px);
	}
	.item.active-B {
		transform: translate(calc(100% - 0px), -0px);
	}
	.item.active-C {
		transform: translate(calc(200% - 0px), -0px);
	}
	.item.active-D {
		transform: translate(calc(300% - 0px), -0px);
	}
	/* 下一页 */
	.item.next {
		transform: translate(calc(400% - 0px), -0px);
	}
</style>
