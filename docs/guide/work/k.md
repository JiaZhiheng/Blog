```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<img
			class="new-con-brand-img"
			data-webpsrc="{$coupon.coupon_img}.webp"
			data-src="{$coupon.coupon_img}.png"
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
			alt="{$coupon.title}"
		/>

		<script>
			/* 定义方法 */
			function check_webp_feature(feature, callback) {
				/** 测试浏览器是否支持webp格式图片的方法
				 * 声明<img>标签并给它的「src」属性赋值
				 * 通过webp的这些特征来加载一个webp图片
				 * 如果能获取到图片的宽度和高度
				 * 说明浏览器支持webp格式的图片的反之则不支。
				 */
				var kTestImages = {
					lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
					lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
					alpha:
						"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
					animation:
						"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
				};
				var img = new Image();
				img.onload = function () {
					// 浏览器支持webp格式图片
					var result = img.width > 0 && img.height > 0;
					callback(feature, result);
				};
				img.onerror = function () {
					// 浏览器不支持webp格式图片
					callback(feature, false);
				};
				img.src = "data:image/webp;base64," + kTestImages[feature];
			}
			/* 执行方法 */
			check_webp_feature("lossy", (f, r) => {
				var viewHeight = document.documentElement.clientHeight; // 获取视口高度
				/** 实现懒加载效果的方法
				 * 获取存在「data-src」属性的<img>标签并将其定义成名为[else]的类数组
				 * 将类数组转化为数组后遍历该数组
				 * 若该元素不存在「src」属性或样式「display」属性为'none'时退出此次循环
				 * 否则继续执行
				 * 获取该元素的位置
				 * 当图片出现在可视区域时立刻执行下列函数
				 *     声明<img>标签
				 *     若浏览器支持webp格式的图片且「data-webpsrc」属性存在时将「data-webpsrc」属性赋值给<img>标签的「src」属性
				 *     反之则将「data-webpsrc」属性赋值给<img>标签的「src」属性
				 *     否则将「data-src」属性赋值给<img>标签的「src」属性
				 *     之后重新将<img>标签的「src」属性赋值给每一项的「src」属性
				 *     移除data-webpsrc属性和data-src属性
				 */
				function lazyload() {
					var eles = document.querySelectorAll("img[data-src]");
					Array.prototype.forEach.call(eles, function (item, index) {
						var rect;
						if (
							item.dataset.src === "" ||
							window.getComputedStyle(item, null).display == "none"
						) {
							return;
						}
						rect = item.getBoundingClientRect();
						if (rect.bottom >= 0 && rect.top < viewHeight) {
							!(function () {
								var img = new Image();
								if (r && item.dataset.webpsrc) {
									img.src = item.dataset.webpsrc;
								} else {
									img.src = item.dataset.src;
								}
								img.onload = function () {
									item.src = img.src;
								};
								item.removeAttribute("data-webpsrc");
								item.removeAttribute("data-src");
							})();
						}
					});
				}

				lazyload();
				document.addEventListener("scroll", lazyload); // 监听页面滑动事件并执行懒加载函数
			});
		</script>
	</body>
</html>
```
