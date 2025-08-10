<script setup>
import { ref } from 'vue';
const isLoading = ref(true);
const toggleLoading = () => {
  isLoading.value = !isLoading.value
}
</script>

# Loading 加载

用于页面和区块的加载状态。

## 区域加载

::: preview
<div style="width: 100%; text-align: center;">
  <Loading :loading="isLoading" text="正在拼命加载中..." style="width: 100%; height: 200px; border: 1px solid #eee; border-radius: 4px;">
    <div style="padding: 20px;">
      <h4>这里是需要被加载的内容</h4>
      <p>加载完成后，遮罩层会消失。</p>
    </div>
  </Loading>
  <br />
  <Button type="primary" @click="toggleLoading">
    {{ isLoading ? '完成加载' : '开始加载' }}
  </Button>
</div>
:::