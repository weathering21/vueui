<template>
  <div class="m-loading-wrapper">
    <slot></slot>
    <Transition name="loading-fade">
      <div v-if="loading" class="m-loading-mask">
        <div class="m-loading-spinner">
          <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" />
          </svg>
          <p v-if="text" class="m-loading-text">{{ text }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MLoading'
});

defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.m-loading-wrapper {
  position: relative;
}
.m-loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.m-loading-spinner {
  text-align: center;
}
.m-loading-text {
  color: #409eff;
  margin: 3px 0;
  font-size: 14px;
}

/* Spinner 动画 */
.circular {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
}
.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}
@keyframes loading-rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}

/* Transition 动画 */
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 0.3s;
}
.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}
</style>