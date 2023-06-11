```html
<!-- MP3 转 M4A 的动画效果 -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
			<defs>
				<symbol id="icon-convert" viewBox="0 0 1024 1024">
					<path
						d="M199.193331 345.611667c0 0 63.411407-98.646917 163.634656-151.569436 100.292202-52.922519 223.755294-37.703837 304.715203 13.607774 81.028862 51.311611 108.313364 94.636636 108.313364 94.636636l69.786485-40.10321c0 0 14.39524-7.19812 14.39524 9.63147L860.038278 523.641963c0 0 0 22.451778-16.863567 14.396239-14.121426-6.717446-167.405099-94.636636-215.666378-122.366236-26.461059-11.927913-3.221816-21.628336-3.221816-21.628336l67.387112-38.83467c0 0-38.457726-48.535493-94.670613-74.242464-60.120039-31.602573-116.470833-35.373017-185.434675-9.083242-45.038264 17.13838-98.029336 61.046011-136.144294 125.827889L199.193331 345.611667 199.193331 345.611667zM824.802168 678.399637c0 0-63.410807 98.61294-163.633656 151.568836-100.223848 52.922918-223.755694 37.670459-304.715603-13.641751-81.028862-51.311011-108.312764-94.636636-108.312764-94.636636l-69.786485 40.10361c0 0-14.39564 7.19812-14.39564-9.597493L163.95802 500.334365c0 0 0-22.416801 16.863567-14.396239 14.121825 6.718445 167.405099 94.637036 215.666178 122.366236 26.461059 11.927913 3.221816 21.663312 3.221816 21.663312l-67.387112 38.800693c0 0 38.457726 48.534893 94.670613 74.242464 60.121038 31.602573 116.470833 35.373017 185.434675 9.082842 45.038264-17.13838 98.029336-61.011434 136.144294-125.828488L824.802168 678.399637 824.802168 678.399637z"
					></path>
				</symbol>
				<symbol id="icon-down-iphone" viewBox="0 0 1024 1024" fill="#fff">
					<path
						d="M649.785306 161.506856C707.566241 88.169516 694.232179 8.165145 689.787492 1.498114c-6.667031-6.667031-93.338433 6.667031-153.341711 86.671402-53.336247 73.33734-53.336247 153.341711-46.669217 160.008742C496.443594 254.845289 583.114997 248.178259 649.785306 161.506856L649.785306 161.506856zM649.785306 161.506856M794.237643 534.860588c-6.667031-106.672495 93.338433-173.342804 113.339526-186.676866l0-6.667031c0 0-86.671402-106.672495-213.34499-100.005464-80.004371 6.667031-120.006557 46.669217-173.342804 46.669217-66.67031 0-126.673588-46.669217-200.010928-46.669217-60.003278 0-233.346082 53.336247-246.680145 280.015299C63.086584 748.205579 223.095326 959.328225 283.098605 999.330411c60.003278 40.002186 100.005464 26.668124 166.675774-6.667031 33.335154-20.001093 140.00765-26.668124 200.010928 13.334062 73.33734 26.668124 180.009835 6.667031 300.016392-260.014206C934.245292 748.205579 800.904674 714.870423 794.237643 534.860588L794.237643 534.860588zM794.237643 534.860588"
						p-id="8392"
					></path>
				</symbol>
			</defs>
		</svg>
		<div class="audio-down-item" id="convert" data-id="1" data-tag="true">
			<div class="audio-down-link">
				<svg class="icon-convert">
					<use xlink:href="#icon-convert"></use>
				</svg>
				<span id="convertcon"> Convert to M4A </span>
			</div>
		</div>
		<script>
			let spin = document.getElementById("convert");
			let convertcon = document.getElementById("convertcon");
			let icon = document.getElementsByClassName("audio-down-link")[0];
			spin.onclick = function () {
				spin.classList.add("convert-animation");
				convertcon.innerHTML = "Converting ...";
				setTimeout(() => {
					icon.innerHTML = `
                <svg class="icon-down">
                    <use xlink:href="#icon-down-iphone"></use>
                </svg>
                M4A Download`;
				}, 3000);
			};
		</script>
		<style>
			.audio-down-item {
				flex: 1;
				padding-left: 8px;
				width: 200px;
			}

			.audio-down-link {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 48px;
				cursor: pointer;
				color: #fff;
				border-radius: 24px;
				background-color: #0d9f74;
			}

			div.audio-down-link {
				background-color: #333;
				position: relative;
			}

			.icon-down {
				flex: 0 0 20px;
				width: 20px;
				height: 20px;
				margin-right: 8px;
			}

			.icon-convert {
				width: 26px;
				height: 26px;
				margin-right: 4px;
				fill: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.convert-animation .icon-convert {
				-webkit-animation: spin 1s linear infinite;
				animation: spin 1s linear infinite;
			}

			@-webkit-keyframes spin {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}

			@keyframes spin {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}
		</style>
	</body>
</html>
```
