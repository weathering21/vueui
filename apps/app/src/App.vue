<script setup lang="ts">
import { ref } from 'vue';
// 导入我们库里的 Button 和 Dialog
import { Button, Dialog } from '@my-vue-turborepo/ui';

// 创建一个 ref 来控制 Dialog 的显示状态
const dialogVisible = ref(false);

const handleConfirm = () => {
  console.log('Confirm button clicked!');
  dialogVisible.value = false; // 关闭对话框
}

const handleCancel = () => {
  console.log('Cancel button clicked!');
  dialogVisible.value = false; // 关闭对话框
}
</script>

<template>
  <div class="app-container">
    <h1>Dialog Component Demo</h1>
    <Button type="primary" @click="dialogVisible = true">Open Dialog</Button>
  </div>

  <Dialog
      v-model="dialogVisible"
      title="Terms of Service"
      width="600px"
      @open="() => console.log('Dialog opened!')"
      @close="() => console.log('Dialog closed!')"
  >
    <p>This is a paragraph of the terms of service.</p>
    <p>By using our service, you agree to our terms and conditions.</p>

    <template #footer>
      <Button @click="handleCancel">Cancel</Button>
      <Button type="primary" @click="handleConfirm">Confirm</Button>
    </template>
  </Dialog>
</template>

<style scoped>
.app-container {
  width: 100%;
  text-align: center;
  padding-top: 50px;
}
</style>