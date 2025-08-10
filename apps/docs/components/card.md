# Card 卡片

将信息聚合在卡片容器中进行展示。

## 基础用法

包含基础的标题和内容。

::: preview
<Card class="box-card">
<template #header>
<div style="display: flex; justify-content: space-between; align-items: center;">
<span>卡片名称</span>
<Button type="primary">操作按钮</Button>
</div>
</template>
  <div>这是一个内容列表</div>
  <div>这是一个内容列表</div>
  <div>这是一个内容列表</div>
  <div>这是一个内容列表</div>
</Card>
:::

## 简单卡片

卡片可以只有内容区域。

::: preview
<Card style="width: 480px">
  <div>这是一个内容列表</div>
  <div>这是一个内容列表</div>
  <div>这是一个内容列表</div>
  <div>这是一个内容列表</div>
</Card>
:::

## 不同阴影效果

可以通过 `shadow` 属性设置卡片的阴影显示策略。

::: preview
<div style="display: flex; gap: 20px; justify-content: space-around;">
  <Card shadow="always" style="flex: 1;">
    Always
  </Card>
  <Card shadow="hover" style="flex: 1;">
    Hover
  </Card>
  <Card shadow="never" style="flex: 1;">
    Never
  </Card>
</div>
:::