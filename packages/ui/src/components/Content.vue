<template>
  <main class="m-content">
    <slot></slot>
  </main>
</template>
<script setup lang="ts">
defineOptions({ name: 'MContent' });
</script>
<style scoped>
.m-content { flex-grow: 1; padding: 20px; }
</style>