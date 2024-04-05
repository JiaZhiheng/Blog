<template>
  <div class="item" :style="item.style">
    <a class="link" :href="item.link" target="_blank">
      <div class="title">
        <img class="img" v-if="item.icon" :src="item.icon" :alt="item.name" />
        <span class="name">{{ item.name }}</span>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
});
</script>

<style scoped>
.item {
  width: 312px;
  height: 264px;
  border-radius: 12px;
  position: relative;
}

.link {
  display: block;
  width: 100%;
  height: 100%;
  padding: 24px;
}

.title {
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
}

.img {
  width: 64px;
  height: 64px;
}

.name {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}
</style>
