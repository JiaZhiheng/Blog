```html
<!-- 回到顶部的方法 -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<a class="back" href="#"></a>
		<div class="contentA"></div>
	</body>
	<style>
		html {
			scroll-behavior: smooth;
		}
		body {
			margin: 0;
			padding: 0;
		}
		.contentA {
			background-color: #4158d0;
			background-image: linear-gradient(
				43deg,
				#4158d0 0%,
				#c850c0 46%,
				#ffcc70 100%
			);
			width: 100%;
			height: 3000px;
		}
		.back {
			position: sticky;
			float: right;
			top: -110px;
			margin-top: -500px;
			right: 20px;
			border-radius: 50%;
			background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E %3Cpath fill='%23ffffff' d='M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z'%3E%3C/path%3E %3C/svg%3E")
				center no-repeat #d33c3c;
			background-size: 50%;
			width: 50px;
			height: 50px;
			transform: translateY(calc(100vh + 35px));
			z-index: 999;
		}
	</style>
</html>
```
