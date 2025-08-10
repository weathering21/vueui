<script setup>
import { ref } from 'vue';

const columns = ref([
  { prop: 'date', label: 'Date', width: '180px' },
  { prop: 'name', label: 'Name', width: '180px' },
  { prop: 'address', label: 'Address' },
  { prop: 'actions', label: 'Actions' },
]);

const tableData = ref([
  { date: '2025-08-01', name: 'John Smith', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2025-08-02', name: 'Jane Doe', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2025-08-03', name: 'Tom Brown', address: 'No. 189, Grove St, Los Angeles' },
]);

const handleEdit = (row) => {
  alert(`Editing ${row.name}`)
}
</script>

# Table 表格

用于展示多条结构化的数据。

## 基础表格

::: preview
<Table :data="tableData" :columns="columns">
<template #actions="{ row, index }">
<Button @click="handleEdit(row)">Edit</Button>
<Button type="danger">Delete</Button>
</template>
</Table>
:::