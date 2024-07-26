```html
<!-- pdf文件测试 -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div>
      <iframe id="iframe" class="iframe" src="./test_file.pdf"></iframe>
      <div onclick="doPrint()">打印文件</div>
      <a href="./test_file.pdf" download="测试文件">下载文件</a>
    </div>
  </body>
  <script>
    var printIframe = document.getElementById('iframe');
    // 打印
    function doPrint() {
      printIframe.contentWindow.print();
    }

    // 调整大小
    printIframe.style.height = window.innerHeight + 'px';
    printIframe.style.width = window.innerWidth + 'px';
  </script>
  <style>
    * {
      box-sizing: border-box;
    }

    .iframe {
      margin: 20px auto;
      display: block;
      border: none;
      padding: 20px 200px;
    }
  </style>
</html>
```
