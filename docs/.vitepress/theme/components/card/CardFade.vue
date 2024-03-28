<template>
  <div class="item" :style="item.style">
    <div class="item-content">
      <div class="item-info">
        <div :style="item.info.name.style">{{ item.info.name.content }}</div>
        <div :style="item.info.title.style">{{ item.info.title.content }}</div>
        <div
          v-for="description in item.info.descriptionList.content"
          :style="item.info.descriptionList.style"
          >{{ description }}</div
        >
      </div>
      <img :style="item.img.style" src="/project/carousel.png" :alt="item.img.alt" />
    </div>
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
.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;
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
