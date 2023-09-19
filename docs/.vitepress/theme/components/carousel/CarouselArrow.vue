<template>
  <div>
    <div class="arrow arrow-prev" @click="handlePrev">
      <svg
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5397 3.53998L10.4589 4.45922L6.91856 7.9996L10.4589 11.54L9.5397 12.4592L5.08008 7.9996L9.5397 3.53998Z"
          fill="#fff"
          fill-opacity="0.9"
        ></path>
      </svg>
    </div>
    <div class="arrow arrow-next" @click="handleNext">
      <svg
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.4603 12.4592L5.54106 11.54L9.08144 7.99961L5.54106 4.45923L6.4603 3.53999L10.9199 7.99961L6.4603 12.4592Z"
          fill="#fff"
          fill-opacity="0.9"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['prev', 'next']);

function handlePrev() {
  emit('prev');
}

function handleNext() {
  emit('next');
}
</script>
<style scoped lang="scss">
.arrow {
  position: absolute;
  top: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background: transparent;
  opacity: 0;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  &-prev {
    left: 10px;
    transform: translateX(-10px) translateY(-50%);
  }

  &-next {
    right: 10px;
    transform: translateX(10px) translateY(-50%);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .container:hover &-prev,
  .container:hover &-next {
    transform: translateX(0) translateY(-50%);
    opacity: 1;
  }
}
</style>
