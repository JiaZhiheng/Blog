<template>
  <hero></hero>
  <div class="wrap">
    <div class="mobile">
      <card></card>
    </div>
    <div id="container" class="laptop">
      <card></card>
      <div class="swiper">
        <horizontal></horizontal>
        <vertical></vertical>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import hero from "./components/hero.vue";
import card from "./components/card.vue";
import horizontal from "./components/horizontal.vue";
import vertical from "./components/vertical.vue";
// 生命周期钩子 
onMounted(() => {  
  let project = Array.from(document.getElementsByClassName("VPButton medium brand"))[0];
  /* 展示我的项目 */
  project.onclick = function () {
    if (document.body.clientWidth < 960) {
      let url = window.location.href;
      url = url + "guide/project/project.html";
      window.location.href = url;
    } else {
      // 桌面端
      if (container.style.transform == "rotateX(180deg)") {
        container.style.transform = "rotateX(360deg)";
      } else {
        container.style.transform = "rotateX(180deg)";
      }
    }
  };
});
</script>
<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
}

.wrap {
  width: 100%;
  padding: 0 24px;
}

.mobile { 
  margin: 0 auto;
  max-width: 1152px;
}

.laptop {
  display: none;
}

.swiper {
  display: none;
}


@media screen and (min-width: 640px) {
  .wrap {
    padding: 0 48px;
  }
}

@media screen and (min-width: 960px) {
  .wrap {
    padding: 0 64px;
  }

  .mobile { 
    display: none;
  }

  .laptop {
    display: flex;
    margin: 0 auto;
    max-width: 1152px;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.8s;
  }

  .swiper {
    position: absolute;
    left: -8px;
    top: -8px;
    transform: rotateX(180deg);
    backface-visibility: hidden;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    display: flex;
  }
}
</style>
