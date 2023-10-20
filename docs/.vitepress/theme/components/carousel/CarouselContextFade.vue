<template>
  <div class="card-container">
    <div
      v-for="(slotContent, index) in $slots.default()[0].children[0].children[0].children"
      :key="slotContent.key"
      :class="['card-item', { active: indexCounter === index }]"
    >
      <component :is="slotContent"></component>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  indexCounter: Number,
  transitionStyle: String
});
</script>

<style scoped lang="scss">
.card-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  transform: rotate(0);
  cursor: pointer;

  .card-item {
    display: block;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    transition: v-bind('transitionStyle');
  }

  .card-item.active {
    opacity: 1;
  }
}
</style>
