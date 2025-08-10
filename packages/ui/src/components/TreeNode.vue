<template>
  <div class="tree-node">
    <div class="tree-node__content" @click.stop="handleNodeClick">
      <span
          v-if="isParent"
          class="tree-node__expand-icon"
          :class="{ 'expanded': isExpanded }"
          @click.stop="handleToggle"
      >
        ▶
      </span>
      <span v-else class="tree-node__expand-icon placeholder"></span>

      <span class="tree-node__label">{{ node.label }}</span>
    </div>

    <div v-if="isParent && isExpanded" class="tree-node__children">
      <TreeNode
          v-for="child in node.children"
          :key="child.id"
          :node="child"
          :expanded-ids="expandedIds"
          @toggle="emit('toggle', $event)"
          @node-click="emit('node-click', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

// 定义节点数据接口
interface TreeNodeData {
  id: string | number;
  label: string;
  children?: TreeNodeData[];
}

// 必须定义组件名，以便在模板中递归调用
defineOptions({
  name: 'TreeNode'
});

const props = defineProps({
  node: {
    type: Object as PropType<TreeNodeData>,
    required: true,
  },
  expandedIds: {
    type: Set as PropType<Set<string | number>>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: 'toggle', id: string | number): void;
  (e: 'node-click', node: TreeNodeData): void;
}>();

// 是否为父节点
const isParent = computed(() => !!(props.node.children && props.node.children.length > 0));

// 当前节点是否已展开
const isExpanded = computed(() => props.expandedIds.has(props.node.id));

// 冒泡 toggle 事件
const handleToggle = () => emit('toggle', props.node.id);

// 冒泡 node-click 事件
const handleNodeClick = () => emit('node-click', props.node);
</script>

<style scoped>
.tree-node {
  font-size: 14px;
  line-height: 2;
}
.tree-node__content {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
}
.tree-node__content:hover {
  background-color: #f5f7fa;
}
.tree-node__expand-icon {
  display: inline-block;
  width: 20px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  color: #c0c4cc;
}
.tree-node__expand-icon.expanded {
  transform: rotate(90deg);
}
.tree-node__children {
  padding-left: 24px;
}
</style>