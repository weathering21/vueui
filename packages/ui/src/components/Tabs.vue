<template>
  <div class="m-tabs">
    <div class="m-tabs__nav">
      <div
          v-for="pane in panes"
          :key="pane.props?.name"
          class="m-tabs__nav-item"
          :class="{ 'is-active': pane.props?.name === activeName }"
          @click="handleTabClick(pane.props?.name)"
      >
        {{ pane.props?.label }}
      </div>
    </div>
    <div class="m-tabs__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, computed, provide, watch } from 'vue';
import type { VNode, Component } from 'vue';

defineOptions({
  name: 'MTabs'
});

const props = defineProps({
  // v-model 绑定值
  modelValue: {
    type: [String, Number],
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', name: string | number): void;
}>();

// 内部维护的激活状态
const activeName = ref(props.modelValue);

// 监听外部 v-model 的变化，同步更新内部状态
watch(() => props.modelValue, (newValue) => {
  activeName.value = newValue;
});

// 通过 provide 将激活状态提供给所有子组件
provide('activeName', activeName);

// 核心：从插槽中获取所有 TabPane 的 props
const slots = useSlots();
const panes = computed(() => {
  const allSlots = slots.default ? slots.default() : [];
  // @ts-ignore
  const tabPanes = allSlots.filter((node: VNode) => (node.type as Component).name === 'MTabPane');

  // 我们只关心 props，不关心具体内容
  return tabPanes.map(pane => ({ props: pane.props }));
});

// 点击 Tab 导航项时的处理函数
const handleTabClick = (name: string | number) => {
  activeName.value = name; // 更新内部状态
  emit('update:modelValue', name); // 通知外部 v-model 更新
};
</script>

<style scoped>
.m-tabs {
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  padding: 16px;
}
.m-tabs__nav {
  display: flex;
  border-bottom: 2px solid #e4e7ed;
  margin-bottom: 16px;
}
.m-tabs__nav-item {
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
}
.m-tabs__nav-item:hover {
  color: #409eff;
}
.m-tabs__nav-item.is-active {
  color: #409eff;
  font-weight: 600;
}
.m-tabs__nav-item.is-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #409eff;
}
</style>