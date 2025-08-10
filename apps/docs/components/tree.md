# Tree 树形控件

用清晰的层级结构来展示信息。

## 基础用法

最基础的树形结构展示。

::: preview
<script setup>
import { ref } from 'vue'

const treeData = ref([
  {
    id: '1',
    label: 'Level one 1',
    children: [
      {
        id: '1-1',
        label: 'Level two 1-1',
        children: [
          { id: '1-1-1', label: 'Level three 1-1-1' },
          { id: '1-1-2', label: 'Level three 1-1-2' },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Level one 2',
    children: [
      { id: '2-1', label: 'Level two 2-1' },
      { id: '2-2', label: 'Level two 2-2' },
    ],
  },
  { id: '3', label: 'Level one 3 (Leaf)' },
])

const clickedNodeLabel = ref('None')

const handleNodeClick = (node) => {
  console.log('Node clicked:', node)
  clickedNodeLabel.value = node.label
}
</script>

<div style="display: flex; gap: 40px;">
  <div style="width: 300px; border: 1px solid #ddd; padding: 10px; border-radius: 4px;">
    <Tree :data="treeData" @node-click="handleNodeClick" />
  </div>
  <div>
    <strong>Last Clicked Node:</strong>
    <p style="margin-top: 8px; padding: 8px; background-color: #f0f0f0; border-radius: 4px;">{{ clickedNodeLabel }}</p>
  </div>
</div>
:::