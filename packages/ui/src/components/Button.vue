<template>
  <button class="m-button" :class="buttonStyle"><slot /></button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// 定义组件名称，这在开发者工具中会很有用
defineOptions({
  name: 'MButton'
});

// 定义组件接受的 props
type ButtonProps = {
  type?: 'primary' | 'default' | 'danger';
}
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default'
});

// 根据 props 计算出最终的 class
const buttonStyle = computed(() => {
  return { [`m-button--${props.type}`]: props.type };
});
</script>

<style scoped>
.m-button {
  display: inline-block;
  padding: 8px 15px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
  text-align: center;
}

/* 默认样式 */
.m-button--default {
  background-color: #fff;
  border-color: #dcdfe6;
  color: #606266;
}
.m-button--default:hover {
  background-color: #ecf5ff;
  border-color: #c6e2ff;
  color: #409eff;
}

/* 主要按钮样式 */
.m-button--primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}
.m-button--primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

/* 危险按钮样式 */
.m-button--danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
.m-button--danger:hover {
  background-color: #f78989;
  border-color: #f78989;
}
</style>