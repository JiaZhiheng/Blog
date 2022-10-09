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
import { defineComponent, onMounted, reactive, toRefs } from "vue";
export default defineComponent({
  naem: "vertical",
  setup() {
    const data = reactive({
      time: 4,            // 单步时长 4s
      moveTime: 12.5,     // 移动时间占比 12.5%  0.5s
      staticTime: 87.5,   // 静止时间占比 87.5%  3.5s
      verticalArray: [],  // 内容数量
      percentage: 0,      // 动画进度百分比
      keyframes: "",      // 动画内容
      style: {},          // 样式
    });

    const animation = () => { // 生成 @keyframes 动画并更新
      data.percentage = 0;   
      data.keyframes = `@keyframes vertical{`;                  
      for(let i = 0; i <= data.verticalArray.length * 2; i++ ){
        data.percentage > 100 ? data.percentage = 100 : data.percentage = data.percentage; // 保证进度百分比不超出100%
        data.keyframes+=`${data.percentage}%{top: ${i % 2 == 0 ? -i * (data.vertical.offsetHeight / 2 + 8) / 2 : -(i - 1) * (data.vertical.offsetHeight / 2 + 8) / 2}px;}`;
        if(i % 2 == 0) {
          data.percentage = data.percentage + data.staticTime / data.verticalArray.length;
        } else {
          data.percentage = data.percentage + data.moveTime / data.verticalArray.length;
        }
      }
      data.keyframes+='}';
      data.style.innerHTML = `${data.keyframes}`;
      data.vertical.style.animation = `vertical ${data.time * data.verticalArray.length}s linear infinite`;  // 改变 css
    }

    /* 监听页面变化 */
    window.onresize = () => { // 监听页面变化         
      animation();
    },

    onMounted(() => {
      data.vertical = document.getElementById('vertical');
      data.verticalArray = Array.from(vertical.getElementsByTagName("li"));
      data.vertical.append(data.verticalArray[0].cloneNode(true), data.verticalArray[1].cloneNode(true));
      data.style = document.createElement('style');   
      data.style.type = 'text/css'; 
      animation();
      document.getElementsByTagName('head').item(0).appendChild(data.style);
    });

    return {
      ...toRefs(data),
    }
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
