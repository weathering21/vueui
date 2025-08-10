# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、可切换的标签页。

::: preview
<script setup>
import { ref } from 'vue';
const activeName = ref('first')
</script>

<Tabs v-model="activeName">
  <TabPane label="用户管理" name="first">
    这里是用户管理的内容...
  </TabPane>
  <TabPane label="配置管理" name="second">
    这里是配置管理的内容...
  </TabPane>
  <TabPane label="角色管理" name="third">
    这里是角色管理的内容...
  </TabPane>
  <TabPane label="定时任务补偿" name="fourth">
    这里是定时任务补偿的内容...
  </TabPane>
</Tabs>
:::