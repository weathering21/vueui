<template>
  <div class="m-card" :class="`is-${shadow}-shadow`">
    <div v-if="header || $slots.header" class="m-card__header">
      <slot name="header">{{ header }}</slot>
    </div>

    <div class="m-card__body" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType, CSSProperties } from 'vue';

defineOptions({
  name: 'MCard'
});

defineProps({
  // 头部标题
  header: {
    type: String,
    default: ''
  },
  // 自定义 body 区域的样式
  bodyStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  // 阴影显示策略
  shadow: {
    type: String,
    validator: (val: string) => ['always', 'hover', 'never'].includes(val),
    default: 'always'
  }
});
</script>

<style scoped>
.m-card {
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: box-shadow 0.3s;
}

/* 阴影样式 */
.m-card.is-always-shadow {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
.m-card.is-hover-shadow:hover {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
/* is-never-shadow 不需要额外样式 */

/* 头部样式 */
.m-card__header {
  padding: 16px 20px;
  border-bottom: 1px solid #e4e7ed;
  box-sizing: border-box;
}

/* 内容区样式 */
.m-card__body {
  padding: 20px;
}
</style>