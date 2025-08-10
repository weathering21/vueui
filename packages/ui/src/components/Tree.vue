<template>
  <div class="m-tree">
    <TreeNode
        v-for="node in data"
        :key="node.id"
        :node="node"
        :expanded-ids="expandedNodeIds"
        @toggle="handleToggle"
        @node-click="handleNodeClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue';
import TreeNode from './TreeNode.vue';

// 节点数据接口
interface TreeNodeData {
  id: string | number;
  label: string;
  children?: TreeNodeData[];
}

defineOptions({
  name: 'MTree'
});

defineProps({
  data: {
    type: Array as PropType<TreeNodeData[]>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'node-click', node: TreeNodeData): void;
}>();

// 核心状态：使用 Set 存储所有展开节点的 ID
const expandedNodeIds = ref<Set<string | number>>(new Set());

// 核心逻辑：处理展开/收起
const handleToggle = (id: string | number) => {
  if (expandedNodeIds.value.has(id)) {
    expandedNodeIds.value.delete(id);
  } else {
    expandedNodeIds.value.add(id);
  }
};

// 冒泡节点点击事件
const handleNodeClick = (node: TreeNodeData) => {
  emit('node-click', node);
};
</script>

<style scoped>
.m-tree {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>