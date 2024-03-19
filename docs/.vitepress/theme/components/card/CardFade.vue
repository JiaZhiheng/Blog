<template>
  <div class="item" :style="item.styleObject">
    <h1 class="item-name" :style="item.infoStyle">{{ item.name }}</h1>
    <p class="item-info" :style="item.infoStyle">{{ item.info }}</p>
    <div :style="item.infoStyle">敬请期待...</div>

    <div class="item-link">
      <div class="item-link-content" v-for="link in item.linkList">
        <img class="item-link-svg" :src="link.icon" />
        <a :style="item.infoStyle" :href="link.url" target="_blank">{{ link.text }}</a>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  item: Object
});
</script>

<style scoped>
.item {
  height: 100%;
  width: 100%;
  border-radius: 12px;
  padding: 20px;
}
.item-name {
  color: #fff;
}
.item-info {
  color: #fff;
  font-size: 30px;
}
.item-url {
  color: #409eff;
}
.item-source {
  color: #409eff;
}
.item-link {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 16px;
}
.item-link-content {
  display: flex;
}
.item-link-svg {
  width: 24px;
  height: 24px;
}
</style>
