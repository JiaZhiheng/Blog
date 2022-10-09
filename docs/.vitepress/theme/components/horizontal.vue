<template>
  <div class="swiper-horizontal">
    <n-carousel effect="fade" dot-type="line" :interval="3000" autoplay show-arrow>
      <div class="demo-item" style="color:#4285f4">
        <h1 style="font-size:38px;font-weight:bold">项目一</h1>
      </div>
      <div class="demo-item" style="color:#34a853">
        <h1 style="font-size:38px;font-weight:bold">项目二</h1>
      </div>
      <div class="demo-item" style="color:#fbbc05">
        <h1 style="font-size:38px;font-weight:bold">项目三</h1>
      </div>
      <div class="demo-item" style="color:#ea4335">
        <h1 style="font-size:38px;font-weight:bold">项目四</h1>
      </div>
    </n-carousel>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue';
import { NCarousel } from 'naive-ui'
export default defineComponent({
  name: "horizontal",
  components: {
    NCarousel,
  },
  setup() {
    onMounted(()=>{
      
    })
  }
});
</script>
<style scoped>
.swiper-horizontal {
  flex: 3;
  padding: 8px 0px 8px 8px;
}

.demo-item {
  height: 100%;
  border-radius: 12px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
