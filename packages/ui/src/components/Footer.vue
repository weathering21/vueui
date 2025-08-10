<template>
  <footer class="m-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>
<script setup lang="ts">
defineOptions({ name: 'MFooter' });
defineProps({ height: { type: String, default: '60px' } });
</script>
<style scoped>
.m-footer { padding: 0 20px; }
</style>