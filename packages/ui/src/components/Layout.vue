<template>
  <section class="m-layout" :class="{ 'is-vertical': direction === 'vertical' }">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'MLayout' });

// 使用 prop 来明确控制方向，而不是嗅探 slot
defineProps({
  direction: {
    type: String,
    validator: (val: string) => ['horizontal', 'vertical'].includes(val),
    default: 'horizontal'
  }
});
</script>

<style scoped>
.m-layout {
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
}
.m-layout.is-vertical {
  flex-direction: column;
}
</style>