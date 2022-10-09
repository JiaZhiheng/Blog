<template>
  <div class="swiper-vertical">
    <ul class="vertical" id="vertical">
      <li class="vertical-li">
        <div class="vertical-item">
          <a href="/" class="coverlink">
            <p style="color: #4285f4">项目A</p>
          </a>
        </div>
      </li>
      <li class="vertical-li">
        <div class="vertical-item">
          <a href="/" class="coverlink">
            <p style="color: #34a853">项目B</p>
          </a>
        </div>
      </li>
      <li class="vertical-li">
        <div class="vertical-item">
          <a href="/" class="coverlink">
            <p style="color: #fbbc05">项目C</p>
          </a>
        </div>
      </li>
      <li class="vertical-li">
        <div class="vertical-item">
          <a href="/" class="coverlink">
            <p style="color: #ea4335">项目D</p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  naem: "vertical",
  setup() {
    onMounted(() => {
      let vertical = document.getElementById('vertical');
      let verticalArray = Array.from(vertical.getElementsByTagName("li"));
      vertical.append(verticalArray[0].cloneNode(true), verticalArray[1].cloneNode(true));
      let time = 4 * verticalArray.length;          // 单步时长       4s
      let moveTime = 12.5 / verticalArray.length;   // 移动时间百分比  12.5%
      let staticTime = 87.5 / verticalArray.length; // 静止时间百分比  87.5%
      let step = vertical.offsetHeight / 2 + 8;     // 垂直移动像素数  214px  
      let percentage = 0;                           // 动画进度百分比
      let keyframes = `@keyframes vertical{`;       // 生成 @keyframes 动画
      for(let i = 0; i <= verticalArray.length * 2; i++ ){
        percentage > 100 ? percentage = 100 : percentage = percentage; // 保证进度百分比不超出100%
        keyframes+=`${percentage}%{top: ${i % 2 == 0 ? -i * step / 2 : -(i - 1) * step / 2}px;}`;
        if(i % 2 == 0) {
          percentage = percentage + staticTime;
        } else {
          percentage = percentage + moveTime;
        }
      }
      keyframes+='}';
      vertical.style.animation = `vertical ${time}s linear infinite`;  // 改变 css
      let style = document.createElement('style');        
      style.type = 'text/css'; 
      style.innerHTML=`${keyframes}`;
      document.getElementsByTagName('head').item(0).appendChild(style);
    });
  }
});
</script>
<style scoped>
.swiper-vertical {
  flex: 1;
  padding: 8px 8px 8px 4px;
  height: 100%;
  width: calc(100% - 10px);
  margin-left: 10px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.vertical {
  list-style: none;
  height: 100%;
  position: relative;
}

.vertical-li {
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  height: calc(50% - 8px);
  margin-bottom: 16px;
}

.vertical-item {
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
  background-color: #eee;
  border-radius: 12px;
  font-size: 26px;
  font-weight: bold;
  position: relative;
}

.coverlink {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
