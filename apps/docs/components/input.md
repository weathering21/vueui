<script setup>
import { ref } from 'vue'

// 基础用法
const text = ref('')

// 可清空和密码框
const text1 = ref('可以清空')
const text2 = ref('123456')

// 带图标的输入框
const text3 = ref('')
const text4 = ref('')
</script>

# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

::: preview
<Input v-model="text" placeholder="请输入内容" />
:::

## 禁用状态

::: preview
<Input placeholder="禁用状态" disabled />
:::

## 可清空和密码框

::: preview
<div style="display: flex; flex-direction: column; gap: 16px;">
  <Input v-model="text1" placeholder="请输入内容" clearable />
  <Input v-model="text2" type="password" placeholder="请输入密码" show-password />
</div>
:::

## 带图标的输入框

可以通过 `prefix` 和 `suffix` 插槽在输入框内添加图标。

::: preview
<div style="display: flex; flex-direction: column; gap: 16px;">
  <Input v-model="text3" placeholder="请输入内容">
    <template #prefix>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
    </template>
  </Input>
  <Input v-model="text4" placeholder="请选择日期">
    <template #suffix>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM7 12h5v5H7z"/></svg>
    </template>
  </Input>
</div>
:::