<template>
  <header class="m-header" :style="{ height }">
    <slot></slot>
  </header>
</template>
<script setup lang="ts">
defineOptions({ name: 'MHeader' });
defineProps({ height: { type: String, default: '60px' } });
</script>
<style scoped>
.m-header { padding: 0 20px; }
</style>