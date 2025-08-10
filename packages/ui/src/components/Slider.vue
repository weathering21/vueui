<template>
  <div class="m-slider" ref="sliderRef" @click="onSliderClick">
    <div class="m-slider__runway">
      <div class="m-slider__bar" :style="{ width: barWidth }"></div>
      <div
          class="m-slider__thumb"
          :style="{ left: barWidth }"
          @mousedown="onDragStart"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue';

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  }
});

const emit = defineEmits(['update:modelValue']);

const sliderRef = ref<HTMLElement | null>(null);
const dragging = ref(false);

// 计算滑块位置百分比
const barWidth = computed(() => {
  const percentage = ((props.modelValue - props.min) / (props.max - props.min)) * 100;
  return `${percentage}%`;
});

// 更新值的核心函数
const setValue = (event: MouseEvent) => {
  if (!sliderRef.value) return;
  const rect = sliderRef.value.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const percentage = Math.max(0, Math.min(1, offsetX / rect.width));

  const rawValue = props.min + percentage * (props.max - props.min);
  const steps = Math.round((rawValue - props.min) / props.step);
  const finalValue = Math.min(props.max, props.min + steps * props.step);

  emit('update:modelValue', finalValue);
};

// 处理滑块点击
const onSliderClick = (event: MouseEvent) => {
  if (dragging.value) return;
  setValue(event);
};

// 拖动处理
const onDragging = (event: MouseEvent) => {
  if (!dragging.value) return;
  setValue(event);
};

const onDragStart = (event: MouseEvent) => {
  event.preventDefault();
  dragging.value = true;
  document.addEventListener('mousemove', onDragging);
  document.addEventListener('mouseup', onDragEnd);
};

const onDragEnd = () => {
  dragging.value = false;
  document.removeEventListener('mousemove', onDragging);
  document.removeEventListener('mouseup', onDragEnd);
};

onBeforeUnmount(() => {
  // 组件卸载时清理事件监听
  document.removeEventListener('mousemove', onDragging);
  document.removeEventListener('mouseup', onDragEnd);
});
</script>

<style scoped>
.m-slider {
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
}
.m-slider__runway {
  position: relative;
  height: 6px;
  background-color: #e4e7ed;
  border-radius: 3px;
}
.m-slider__bar {
  position: absolute;
  height: 100%;
  background-color: #409eff;
  border-radius: 3px;
}
.m-slider__thumb {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 2px solid #409eff;
  border-radius: 50%;
  transform: translate(-50%, -5px);
  cursor: grab;
}
.m-slider__thumb:hover {
  transform: translate(-50%, -5px) scale(1.2);
}
</style>