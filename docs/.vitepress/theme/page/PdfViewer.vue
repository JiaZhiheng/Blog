<template>
  <div class="pdf-viewer-container">
    <iframe 
      ref="iframeRef"
      class="pdf-iframe"
      :src="src"
      :style="{ width: width, height: height }"
    ></iframe>
    
    <div class="action-buttons" v-if="showActions">
      <button 
        v-if="showPrint"
        class="button print"
        @click="handlePrint"
      >
        <span>{{ printText }}</span>
        <svg
        t="1668945635946"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3266"
        width="20"
        height="20"
        fill="#fff"
      >
        <path
          d="M819.2 364.8h-44.8V128c0-17.066667-14.933333-32-32-32H281.6c-17.066667 0-32 14.933333-32 32v236.8H204.8c-59.733333 0-108.8 49.066667-108.8 108.8v192c0 59.733333 49.066667 108.8 108.8 108.8h44.8V896c0 17.066667 14.933333 32 32 32h460.8c17.066667 0 32-14.933333 32-32v-121.6h44.8c59.733333 0 108.8-49.066667 108.8-108.8v-192c0-59.733333-49.066667-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160z m396.8 704H313.6V620.8h396.8v243.2z m153.6-198.4c0 25.6-19.2 44.8-44.8 44.8h-44.8v-121.6c0-17.066667-14.933333-32-32-32H281.6c-17.066667 0-32 14.933333-32 32v121.6H204.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"
          p-id="3267"
        ></path>
      </svg>
      </button>

      <a 
        v-if="showPreview"
        class="button review"
        :href="previewHref || src"
        target="_blank"
      >
        <span>{{ previewText }}</span>
        <svg
        t="1668945656358"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3420"
        width="20"
        height="20"
        fill="#fff"
      >
        <path
          d="M512 836.266667C230.4 836.266667 74.666667 533.333333 68.266667 520.533333c-4.266667-8.533333-4.266667-19.2 0-29.866666 6.4-12.8 164.266667-315.733333 443.733333-315.733334 281.6 0 437.333333 305.066667 443.733333 317.866667 4.266667 8.533333 4.266667 19.2 0 29.866667-6.4 10.666667-162.133333 313.6-443.733333 313.6zM132.266667 505.6c34.133333 57.6 170.666667 266.666667 379.733333 266.666667s345.6-209.066667 379.733333-266.666667c-34.133333-57.6-170.666667-266.666667-379.733333-266.666667S166.4 448 132.266667 505.6z"
          p-id="3421"
        ></path>
        <path
          d="M512 650.666667c-76.8 0-138.666667-61.866667-138.666667-138.666667s61.866667-138.666667 138.666667-138.666667 138.666667 61.866667 138.666667 138.666667-61.866667 138.666667-138.666667 138.666667z m0-213.333334c-40.533333 0-74.666667 34.133333-74.666667 74.666667s34.133333 74.666667 74.666667 74.666667 74.666667-34.133333 74.666667-74.666667-34.133333-74.666667-74.666667-74.666667z"
          p-id="3422"
        ></path>
      </svg>
      </a>

      <a
        v-if="showDownload"
        class="button download"
        :href="downloadHref || src"
        :download="downloadFileName"
      >
        <span>{{ downloadText }}</span>
        <svg
        t="1668945673111"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3581"
        width="20"
        height="20"
        fill="#fff"
      >
        <path
          d="M896 672c-17.066667 0-32 14.933333-32 32v128c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-128c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v128c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-128c0-17.066667-14.933333-32-32-32z"
          p-id="3582"
        ></path>
        <path
          d="M488.533333 727.466667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l213.333333-213.333334c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-157.866667 157.866667V170.666667c0-17.066667-14.933333-32-32-32s-34.133333 14.933333-34.133333 32v456.533333L322.133333 469.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l211.2 213.333334z"
          p-id="3583"
        ></path>
      </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '720px'
  },
  height: {
    type: String,
    default: '1000px'
  },
  showActions: {
    type: Boolean,
    default: true
  },
  showPrint: {
    type: Boolean,
    default: true
  },
  showPreview: {
    type: Boolean,
    default: true
  },
  showDownload: {
    type: Boolean,
    default: true
  },
  printText: {
    type: String,
    default: '打印手册'
  },
  previewText: {
    type: String,
    default: '预览手册'
  },
  downloadText: {
    type: String,
    default: '下载手册'
  },
  downloadFileName: String,
  previewHref: String,
  downloadHref: String
});

const iframeRef = ref(null);

const handlePrint = () => {
  if (iframeRef.value?.contentWindow) {
    iframeRef.value.contentWindow.print();
  }
};
</script>

<style scoped>
.pdf-viewer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pdf-iframe {
  margin: 20px auto;
  border: none;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.action-buttons {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.button {
  display: flex;
  align-items: center;
  padding: 12px 36px;
  border-radius: 24px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s;
}

.button:hover {
  opacity: 0.9;
}

.button span {
  margin-right: 8px;
}

.print { background-color: #eb4334; }
.review { background-color: #35aa53; }
.download { background-color: #fbbd06; }
</style>
