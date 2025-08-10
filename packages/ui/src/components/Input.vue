<template>
  <div
      class="m-input"
      :class="{ 'is-disabled': disabled, 'has-prefix': $slots.prefix, 'has-suffix': $slots.suffix || clearable || showPassword }"
  >
    <span v-if="$slots.prefix" class="m-input__prefix">
      <slot name="prefix" />
    </span>

    <input
        class="m-input__inner"
        :type="showPasswordVisible ? 'text' : type"
        :disabled="disabled"
        :placeholder="placeholder"
        v-bind="$attrs"
        v-model="internalValue"
        @input="handleInput"
    />

    <span v-if="$slots.suffix || clearable || showPassword" class="m-input__suffix">
      <slot name="suffix" />
      <span v-if="clearable && internalValue" class="m-input__clear" @click="handleClear">
        ×
      </span>
      <span v-if="showPassword" class="m-input__show-password" @click="handleShowPassword">
        👁
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';

// 关键：因为我们将 $attrs 手动绑定到了内部的 <input> 上，
// 所以不希望根元素 <div> 继承这些属性，特别是 class 和 style 之外的。
defineOptions({
  name: 'MInput',
  inheritAttrs: false
});

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'input', value: string | number): void;
  (e: 'clear'): void;
}>();


// 内部双向绑定的值，使用 computed 来代理 prop
const internalValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  }
});

// 密码可见性状态
const showPasswordVisible = ref(false);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('input', target.value);
};

// 清空输入框
const handleClear = () => {
  internalValue.value = '';
  emit('clear');
};

// 切换密码可见性
const handleShowPassword = () => {
  showPasswordVisible.value = !showPasswordVisible.value;
};
</script>

<style scoped>
.m-input {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
}
.m-input__inner {
  width: 100%;
  height: 32px;
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  color: #606266;
  background-color: #fff;
  transition: border-color 0.2s;
  outline: none;
}
.m-input__inner:focus {
  border-color: #409eff;
}
.m-input.is-disabled .m-input__inner {
  background-color: #f5f7fa;
  color: #c0c4cc;
  cursor: not-allowed;
}

/* --- 前后缀样式 --- */
.m-input__prefix,
.m-input__suffix {
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #909399;
}
.m-input__prefix {
  left: 10px;
}
.m-input__suffix {
  right: 10px;
  gap: 8px; /* 图标之间的间距 */
}
.m-input.has-prefix .m-input__inner {
  padding-left: 35px;
}
.m-input.has-suffix .m-input__inner {
  padding-right: 35px;
}
.m-input.has-prefix.has-suffix .m-input__inner {
  padding-left: 35px;
  padding-right: 60px; /* 根据实际图标数量调整 */
}

/* --- 内置图标样式 --- */
.m-input__clear,
.m-input__show-password {
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.m-input__clear:hover,
.m-input__show-password:hover {
  color: #409eff;
}
</style>