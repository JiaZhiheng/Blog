```html
<!-- 打印功能 -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
		<defs>
			<symbol id="icon-print" viewBox="0 0 512 512">
				<path
					d="M462.623,111H408.2V40c0-11.046-8.954-20-20-20H123.801c-11.046,0-20,8.954-20,20v71H49.377C22.151,111,0,133.43,0,161
			v190c0,27.57,22.151,50,49.377,50H103.8v71c0,11.046,8.954,20,20,20h264.398c11.046,0,20-8.954,20-20v-71h54.423
			C489.849,401,512,378.57,512,351V161C512,133.43,489.849,111,462.623,111z M143.801,60h224.398v51H143.801V60z M143.801,452
			c0-1.609,0-146.186,0-151h224.398c0,4.814,0,149.391,0,151H143.801z M462.623,361H408.2v-60H426c11.046,0,20-8.954,20-20
			c0-11.046-8.954-20-20-20c-12.042,0-326.542,0-340,0c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h17.801v60H49.377
			c-5.17,0-9.377-4.486-9.377-10V161c0-5.514,4.207-10,9.377-10c6.677,0,405.541,0,413.245,0c5.171,0,9.377,4.486,9.377,10v190H472
			C472,356.514,467.793,361,462.623,361z"
				/>
			</symbol>
		</defs>
	</svg>

	<body>
		<div class="menudetail" id="modal">
			<div class="new-con">
				<div class="modal-wrapper">
					<div class="modal-wrapper-des">
						<h6 class="modal-tl">
							【ポテトSサイズ 無料(スゴ得LINE公式初回友達登録プレゼント)】
						</h6>
						<p class="modal-price">金額：150円→無料</p>
						<p class="modal-time">
							補足：このクーポンを使える店舗は東京都・埼玉県・群馬県の一部店舗に限ります。詳細はスゴ得LINE公式ページをご確認ください。
						</p>
					</div>
				</div>
				<div class="modal-btn-wp">
					<div class="modal-print" onclick="doPrint()">
						<svg class="icon-print">
							<use xlink:href="#icon-print"></use>
						</svg>
						印刷
					</div>
				</div>
			</div>
		</div>
		<iframe
			id="printframe"
			src=""
			width="0"
			height="0"
			frameborder="0"
		></iframe>
	</body>
	<script>
		var cssText =
			"body{line-height:1.78;}p,h3{margin:0;}.modal-btn-wp,.couponcode{display:none;}.modal-logo{width:24px;}.modal-wrapper{text-align:center;padding:0 20px 16px}.modal-img{height:85px}.modal-tl{font-size:24px;line-height:1.4;margin-top:16px;margin-bottom:6px}.modal-price{font-size:14px;font-weight:bold;margin-bottom:8px;margin-bottom:16px;}.print-code{font-size:26px;font-weight:bold;margin-bottom:16px;}";
		function doPrint() {
			var printcontent = document.getElementById("modal");
			prnhtml = printcontent.innerHTML;
			console.log(prnhtml);
			printframe = document.getElementById("printframe");
			console.log(printframe);
			printframe.contentDocument.write(prnhtml);
			var iframeDocument = printframe.contentWindow.document;
			var headElement = iframeDocument.getElementsByTagName("head")[0];
			var style = document.createElement("style");
			style.setAttribute("style", "stylesheet");
			var textNode = document.createTextNode(cssText);
			style.appendChild(textNode);
			headElement.appendChild(style);
			printframe.contentDocument.close();
			printframe.contentWindow.print();
		}
	</script>
	<style>
		* {
			box-sizing: border-box;
		}

		.menudetail {
			margin: 20px 0;
			width: 728px;
		}

		.new-con {
			border: 1px solid #e5e5e5;
			position: relative;
		}

		.modal-wrapper {
			padding-top: 1px;
			display: flex;
			padding: 0 24px 24px;
			align-items: center;
			text-align: center;
		}

		.modal-wrapper-des {
			width: 100%;
			flex: 0 0 100%;
			text-align: center;
		}

		.modal-tl {
			font-size: 24px;
			line-height: 1.4;
			margin-top: 1.4;
			margin-top: 16px;
			margin-bottom: 6px;
		}

		.modal-price {
			font-size: 14px;
			font-weight: bold;
			margin-bottom: 8px;
			color: #df3636;
		}

		.modal-time {
			margin-top: 10px;
			margin-bottom: 0;
		}

		.modal-btn-wp {
			display: flex;
			flex-direction: row-reverse;
			padding: 0 20px 16px;
			border-top: 1px dashed #eee;
		}

		.modal-print {
			height: 48px;
			border: 1px solid #eee;
			border-radius: 24px;
			flex: 1;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 16px;
		}

		.icon-print {
			width: 16px;
			height: 16px;
			margin-right: 6px;
		}
	</style>
</html>
```
