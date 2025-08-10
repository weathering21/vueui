<template>
  <div class="m-tab-pane" v-show="isActive">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';

defineOptions({
  name: 'MTabPane'
});

const props = defineProps({
  // 标签上显示的文字
  label: {
    type: String,
    required: true,
  },
  // 唯一标识符
  name: {
    type: [String, Number],
    required: true,
  },
});

// 从父组件 Tabs 注入当前激活的 name
const activeName = inject<Ref<string | number>>('activeName');

// 判断自己是否应该显示
const isActive = computed(() => activeName?.value === props.name);
</script>

<style scoped>
.m-tab-pane {
  padding: 16px 0;
}
</style>