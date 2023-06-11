```html
<!-- 涟漪效果 -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<div class="ripple"></div>
	</body>
	<style>
		body {
			margin: 0;
			padding: 0;
		}
		.ripple {
			background: #1abc9c;
			width: 100%;
			height: 100vh;
			color: #fff;
			position: relative;
			cursor: pointer;
			display: inline-block;
			overflow: hidden;
			text-align: center;
			-webkit-tap-highlight-color: transparent;
			z-index: 1;
		}
		.ripple .ripple-animation {
			position: absolute;
			border-radius: 50%;
			width: 25px;
			height: 25px;
			opacity: 0;
			background: rgba(255, 255, 255, 0.3);
			transition: all 0.7s ease-out;
			transition-property: transform, opacity, -webkit-transform;
			-webkit-transform: scale(0);
			transform: scale(0);
			pointer-events: none;
		}
	</style>
	<script>
		// 点击涟漪效果
		document.addEventListener("DOMContentLoaded", function () {
			let duration = 750;
			// 样式string拼凑
			let forStyle = function (position) {
				let cssStr = "";
				for (let key in position) {
					// if(position.hasOwnProperty(key)){
					cssStr += key + ":" + position[key] + ";";
					// }
				}
				return cssStr;
			};
			// 获取鼠标点击位置
			let forRect = function (target) {
				let position = {
					top: 0,
					left: 0,
				};
				let ele = document.documentElement;
				typeof target.getBoundingClientRect != "undefined" &&
					(position = target.getBoundingClientRect());
				return {
					top: position.top + window.pageYOffset - ele.clientTop,
					left: position.left + window.pageXOffset - ele.clientLeft,
				};
			};

			let show = function (event) {
				let pDiv = event.target;
				let cDiv = document.createElement("div");
				pDiv.appendChild(cDiv);
				let rectObj = forRect(pDiv);
				let height = event.pageY - rectObj.top;
				let left = event.pageX - rectObj.left;
				let scale = "scale(" + (pDiv.clientWidth / 100) * 10 + ")";
				let position = {
					top: height + "px",
					left: left + "px",
				};

				(cDiv.className = cDiv.className + " ripple-animation"),
					cDiv.setAttribute("style", forStyle(position)),
					(position["-webkit-transform"] = scale),
					(position["-moz-transform"] = scale),
					(position["-ms-transform"] = scale),
					(position["-o-transform"] = scale),
					(position.transform = scale),
					(position.opacity = "1"),
					(position["-webkit-transition-duration"] = duration + "ms"),
					(position["-moz-transition-duration"] = duration + "ms"),
					(position["-o-transition-duration"] = duration + "ms"),
					(position["transition-duration"] = duration + "ms"),
					(position["-webkit-transition-timing-function"] =
						"cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
					(position["-moz-transition-timing-function"] =
						"cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
					(position["-o-transition-timing-function"] =
						"cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
					(position["transition-timing-function"] =
						"cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
					cDiv.setAttribute("style", forStyle(position));

				let finishStyle = {
					opacity: 0,
					"-webkit-transition-duration": duration + "ms",
					"-moz-transition-duration": duration + "ms",
					"-o-transition-duration": duration + "ms",
					"transition-duration": duration + "ms",
					"-webkit-transform": scale,
					"-moz-transform": scale,
					"-ms-transform": scale,
					"-o-transform": scale,
					top: height + "px",
					left: left + "px",
				};

				setTimeout(() => {
					cDiv.setAttribute("style", forStyle(finishStyle));
					setTimeout(() => pDiv.removeChild(cDiv), duration);
				}, 100);
			};

			for (let i = 0; i < document.querySelectorAll(".ripple").length; i++) {
				document
					.querySelectorAll(".ripple")
					[i].addEventListener("click", function (e) {
						show(e);
					});
			}
			// addEventListener('click',function(e){
			//   let target = e.target.classList
			//   if (target && target.length) {
			//     for (let i = 0; i < target.length; i++) {
			//       (target[i] === 'ripple') && show(e)
			//     }
			//   }
			// })
		});
	</script>
</html>
```
