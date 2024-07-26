```html
<!-- 揭开 Coupon 的动画效果 -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="wrap">
      <div class="coupon-code">FOTO30</div>
      <div class="coupon-border"></div>
      <div class="coupon">
        <div class="coupon-minibox"></div>
        <div class="coupon-angle"></div>
      </div>
      <div class="coupon-content">Code Einlösen</div>
    </div>
  </body>
  <style>
    * {
      box-sizing: border-box;
    }
    .wrap {
      width: 170px;
      height: 40px;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      box-sizing: content-box;
      display: flex;
    }
    .coupon-border {
      border: 1px dashed #e63c38;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      box-sizing: content-box;
      height: 38px;
      width: calc(100% - 2px);
      background-color: transparent;
      z-index: 1;
    }
    .coupon-code {
      position: absolute;
      width: 170px;
      height: 40px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 4px;
      font-weight: bolder;
      color: #333;
    }
    .coupon {
      width: calc(100% - 20px);
      background-color: #e63c38;
      height: 100%;
      position: absolute;
      transition: all 0.2s linear;
    }
    .coupon::before {
      content: '';
      position: absolute;
      top: unset;
      left: 150px;
      width: 20px;
      height: calc(100% - 20px);
      bottom: 0;
      border-radius: 0;
      border-bottom-right-radius: 8px;
      background-color: #e63c38;
      transition: all 0.2s linear;
    }
    .coupon-minibox {
      position: absolute;
      top: 10px;
      left: unset;
      width: 10px;
      height: 10px;
      right: -10px;
      background: #e63c38;
      transition: all 0.2s linear;
      border-top-right-radius: 50%;
    }
    .coupon-angle {
      position: absolute;
      top: 0;
      left: 150px;
      border-bottom-left-radius: 8px;
      transition: all 0.2s linear;
      border-bottom: 10px solid #ffdbdf;
      border-left: 10px solid #ffdbdf;
      border-right: 10px solid transparent;
      border-top: 10px solid transparent;
      background-color: transparent;
    }
    .wrap:hover .coupon {
      width: calc(100% - 30px);
      background-color: #960012;
    }
    .wrap:hover .coupon:before {
      width: 30px;
      height: calc(100% - 30px);
      left: 140px;
      background-color: #960012;
    }
    .wrap:hover .coupon-angle {
      left: 140px;
      border-bottom: 15px solid #ffdbdf;
      border-left: 15px solid #ffdbdf;
      border-right: 15px solid transparent;
      border-top: 15px solid transparent;
    }
    .wrap:hover .coupon-minibox {
      top: 15px;
      right: -15px;
      width: 15px;
      height: 15px;
      background-color: #960012;
    }
    .wrap:hover .coupon-border {
      border: 1px dashed #960012;
    }
    .coupon-content {
      position: absolute;
      height: 100%;
      width: calc(100% - 60px);
      left: 50%;
      transform: translate(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      text-align: center;
    }
  </style>
</html>
```
