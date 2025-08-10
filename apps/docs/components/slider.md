<script setup>
import { ref } from 'vue';
const value1 = ref(20);
const value2 = ref(50)
</script>

# Slider 滑块

在一个区内通过拖动或点击选择一个值。

## 基础用法

::: preview
<div style="padding: 0 10px;">
  <Slider v-model="value1" />
  <p style="text-align: center; margin-top: 10px;">当前值: {{ value1 }}</p>
</div>
:::

## 带步长的滑块

可以设置 `step` 属性来定义步长。

::: preview
<div style="padding: 0 10px;">
  <Slider v-model="value2" :step="10" />
  <p style="text-align: center; margin-top: 10px;">当前值: {{ value2 }}</p>
</div>
:::