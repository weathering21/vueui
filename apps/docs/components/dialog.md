# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

点击按钮来打开一个基本的对话框。

::: preview
<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>

<Button type="primary" @click="visible = true">打开对话框</Button>

<Dialog v-model="visible" title="提示">
  <span>这是一段信息</span>
  <template #footer>
    <Button @click="visible = false">取消</Button>
    <Button type="primary" @click="visible = false">确定</Button>
  </template>
</Dialog>
:::