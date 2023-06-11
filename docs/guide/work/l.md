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
		<figure class="item">
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample35.jpg"
				alt=""
			/>
			<div class="title">
				<div>
					<h2>项目A</h2>
					<h4>在线预览</h4>
				</div>
			</div>
			<figcaption>
				<p>
					The only skills I have the patience to learn are those that have no
					real application in life.
				</p>
			</figcaption>
		</figure>
	</body>
	<style>
		.item {
			position: relative;
			overflow: hidden;
			margin: 10px;
			min-width: 230px;
			max-width: 315px;
			width: 100%;
			color: #ffffff;
			text-align: center;
			font-size: 16px;
			background-color: #000;
		}

		*,
		*::after,
		*::before {
			box-sizing: border-box;
			transition: all 0.25s ease;
		}

		.item img {
			max-width: 100%;
			backface-visibility: hidden;
			vertical-align: top;
			opacity: 0.9;
			background-color: #000;
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
			background-color: #ffffff;
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
			background-color: #ffffff;
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
			opacity: 0.35;
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
	</style>
</html>
```
