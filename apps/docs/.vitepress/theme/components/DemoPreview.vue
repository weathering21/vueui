<template>
  <div class="demo-preview">
    <div class="demo-preview__showcase">
      <slot />
    </div>

    <div class="demo-preview__actions">
      <button @click="toggleCodeVisibility" class="action-btn">
        {{ codeVisible ? '隐藏源码' : '显示源码' }}
      </button>
    </div>

    <div v-show="codeVisible" class="demo-preview__source">
      <div class="language-vue" v-html="highlightedCode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  sourceCode: string; // 原始的、未经高亮的源码
  highlightedCode: string; // 经过高亮处理并编码的 HTML
}>();

const codeVisible = ref(false);

// 解码高亮后的 HTML
const highlightedCode = computed(() => {
  return decodeURIComponent(props.highlightedCode);
});

const toggleCodeVisibility = () => {
  codeVisible.value = !codeVisible.value;
};
</script>

<style scoped>
.demo-preview {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin: 1.5em 0;
  overflow: hidden;
}

.demo-preview__showcase {
  padding: 24px;
}

.demo-preview__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-top: 1px solid #e2e8f0;
  background-color: #f9fafb;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #334155;
  font-size: 14px;
  font-weight: 500;
}
.action-btn:hover {
  color: #409eff;
}

.demo-preview__source {
  border-top: 1px solid #e2e8f0;
}

/* 确保高亮的代码块没有多余的背景或内边距 */
.demo-preview__source :deep(pre) {
  margin: 0 !important;
  border-radius: 0 !important;
}
</style>