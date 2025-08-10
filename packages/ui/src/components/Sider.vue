<template>
  <aside class="m-sider" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script setup lang="ts">
defineOptions({ name: 'MSider' });
defineProps({ width: { type: String, default: '200px' } });
</script>
<style scoped>
.m-sider { overflow: auto; }
</style>