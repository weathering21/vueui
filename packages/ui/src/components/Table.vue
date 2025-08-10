<template>
  <div class="m-table-wrapper">
    <table class="m-table">
      <thead>
      <tr>
        <th v-for="column in columns" :key="column.prop" :style="{ width: column.width }">
          {{ column.label }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex">
        <td v-for="column in columns" :key="column.prop">
          <slot :name="column.prop" :row="row" :index="rowIndex">
            {{ row[column.prop] }}
          </slot>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface Column {
  prop: string;
  label: string;
  width?: string;
}

defineOptions({
  name: 'MTable'
});

defineProps({
  data: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => []
  },
  columns: {
    type: Array as PropType<Column[]>,
    default: () => []
  }
});
</script>

<style scoped>
.m-table-wrapper {
  width: 100%;
  overflow-x: auto;
}
.m-table {
  width: 100%;
  border-collapse: collapse;
  color: #606266;
}
.m-table th, .m-table td {
  border: 1px solid #e4e7ed;
  padding: 12px 10px;
  text-align: left;
}
.m-table th {
  background-color: #f5f7fa;
  font-weight: 600;
}
</style>