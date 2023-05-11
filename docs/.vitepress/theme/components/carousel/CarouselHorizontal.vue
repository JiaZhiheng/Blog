<template>
	<div class="ver">
		<div class="horizon">
			<div class="item" v-for="item in horizontalConfig">
				<div class="item-in" :style="item.style"></div>
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
			constructor(options) {
				const defaultOptions = {
					element: document.querySelector(".horizon"),
					height: "100%",
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
				itemContainer.setAttribute(
					"style",
					"height: 100%;width: 100%;overflow: hidden;display: flex;flex-direction: row;"
				);
				this.itemContainer = itemContainer;
			}

			/* 初始化轮播图面板和轮播点面板 */
			initHorizontalItemsAndDots() {
				this.items = this.container.querySelectorAll(".item");
				this.items[
					(this.options.index - 1 + this.items.length) % this.items.length
				].classList.add("prev");
				this.items[(this.options.index + 0) % this.items.length].classList.add(
					"active-A"
				);
				this.items[(this.options.index + 1) % this.items.length].classList.add(
					"active-B"
				);
				this.items[(this.options.index + 2) % this.items.length].classList.add(
					"active-C"
				);
				this.items[(this.options.index + 3) % this.items.length].classList.add(
					"active-D"
				);
				this.items[(this.options.index + 4) % this.items.length].classList.add(
					"next"
				);
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
				const test = () => {
					this.setHorizontal(
						this.getPrevIndex(),
						this.getCurrentAIndex(),
						this.getCurrentBIndex(),
						this.getCurrentCIndex(),
						this.getCurrentDIndex(),
						this.getNextIndex()
					);
				};
				setTimeout(() => {
					test();
					data.timeInter = setInterval(() => {
						test();
					}, this.options.interval);
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
				console.log(this.next);
				this.next = this.items[nextIndex];
				console.log(this.next);
				this.setHorizontalItem();
			}

			/* 设置轮播面板 */
			setHorizontalItem() {
				this.prev.setAttribute("class", `item prev`);
				this.currentA.setAttribute("class", `item active-A`);
				this.currentB.setAttribute("class", `item active-B`);
				this.currentC.setAttribute("class", `item active-C`);
				this.currentD.setAttribute("class", `item active-D`);
				this.next.setAttribute("class", `item next`);
				this.container.offsetHeight; // 原因：触发回流使轮播图流畅
				this.resetHorizontalItem();
			}

			/* 重置轮播面板 */
			resetHorizontalItem() {
				const callback = () => {
					this.prev.setAttribute("class", "item");
					this.currentA.setAttribute("class", "item prev");
					this.currentB.setAttribute("class", "item active-A");
					this.currentC.setAttribute("class", "item active-B");
					this.currentD.setAttribute("class", "item active-C");
					this.next.setAttribute("class", "item active-D");
				};
				callback();
			}
		}

		/* 声明轮播图 */
		new vertical();
	});
</script>
<style scoped>
	.horizon {
		display: flex;
		margin: 0 auto;
		width: 100%;
		border-radius: 12px;
	}
	.item {
		display: none;
		width: 25%;
		height: 100%;
		padding: 8px;
		position: absolute;
		transition: all 4s linear;
	}
	.item-in {
		height: 100%;
		border-radius: 12px;
	}

	.ver {
		flex: 1;
		height: 100%;
		border-radius: 12px;
		position: relative;
		overflow: hidden;
	}
	.horizon {
		position: relative;
	}

	.items {
		height: 100%;
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: row;
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
		transform: translateX(calc(-100% - 0px));
	}
	/* 当前页 */
	.item.active-A {
		transform: translateX(0);
	}
	.item.active-B {
		transform: translateX(calc(100% + 0px));
	}
	.item.active-C {
		transform: translateX(calc(200% + 0px));
	}
	.item.active-D {
		transform: translateX(calc(300% + 0px));
	}
	/* 下一页 */
	.item.next {
		transform: translateX(calc(400% + 0px));
	}
</style>
