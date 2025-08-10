<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div v-if="modelValue" class="m-dialog__overlay" @click="onOverlayClick">
        <div class="m-dialog" :style="dialogStyle" @click.stop>
          <div class="m-dialog__header">
            <slot name="header">
              <span class="m-dialog__title">{{ title }}</span>
            </slot>
            <button v-if="showClose" class="m-dialog__close-btn" @click="handleClose">
              &times;
            </button>
          </div>
          <div class="m-dialog__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="m-dialog__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';

defineOptions({
  name: 'MDialog'
});

// 1. 定义 Props
type DialogProps = {
  modelValue: boolean; // 用于 v-model
  title?: string;
  width?: string;
  showClose?: boolean;
  closeOnClickModal?: boolean;
  closeOnPressEscape?: boolean;
}
const props = withDefaults(defineProps<DialogProps>(), {
  title: 'Dialog Title',
  width: '50%',
  showClose: true,
  closeOnClickModal: true,
  closeOnPressEscape: true
});

// 2. 定义 Emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void; // v-model 的更新事件
  (e: 'open'): void;
  (e: 'close'): void;
}>();

// 3. 核心逻辑
const handleClose = () => {
  emit('update:modelValue', false);
  emit('close');
};

const onOverlayClick = () => {
  if (props.closeOnClickModal) {
    handleClose();
  }
};

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.closeOnPressEscape) {
    handleClose();
  }
};

// 4. 监听 modelValue 的变化来处理副作用
watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        // 打开时
        emit('open');
        window.addEventListener('keydown', onKeydown); // 添加 ESC 键监听
      } else {
        // 关闭时
        window.removeEventListener('keydown', onKeydown); // 移除监听，避免内存泄漏
      }
    }
);

// 5. 计算属性，用于动态设置样式
const dialogStyle = computed(() => {
  return {
    width: props.width
  };
});
</script>

<style scoped>
/* 遮罩层样式 */
.m-dialog__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

/* 对话框主体样式 */
.m-dialog {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
}

/* 头部样式 */
.m-dialog__header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e7ed;
  font-size: 18px;
  font-weight: 600;
}

/* 标题样式 */
.m-dialog__title {
  color: #303133;
}

/* 关闭按钮 */
.m-dialog__close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #909399;
  padding: 0;
  line-height: 1;
}
.m-dialog__close-btn:hover {
  color: #409eff;
}

/* 内容区域样式 */
.m-dialog__body {
  padding: 20px;
  overflow-y: auto; /* 内容过长时可滚动 */
  color: #606266;
  font-size: 14px;
}

/* 页脚样式 */
.m-dialog__footer {
  padding: 12px 20px;
  border-top: 1px solid #e4e7ed;
  text-align: right;
}
.m-dialog__footer :deep(button:not(:last-child)) {
  margin-right: 12px;
}

/* Transition 动画 */
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s ease;
}
.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
</style>