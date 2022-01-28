<template>
  <button
    class="xq-switch"
    :class="classes"
    @click="toggle"
    :style="{ background: modelValue ? activeColor : inactiveColor }"
  >
    <span></span>
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  activeColor: {
    type: String,
    default: "#18a058",
  },
  inactiveColor: {
    type: String,
    default: "#dbdbdb",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
});

const emit = defineEmits(["update:modelValue"]);

const toggle = () => {
  if (props.disabled) {
    return;
  }
  emit("update:modelValue", !props.modelValue);
};
const { modelValue, disabled, size } = toRefs(props);

const classes = computed(() => {
  return {
    [`xq-switch-checked`]: modelValue.value,
    [`xq-switch-disabled`]: disabled.value,
    [`xq-switch-${size.value}`]: size.value,
  };
});
</script>
<script lang="ts">
export default {
  name: "XqSwitch",
};
</script>

<style lang="scss" scoped>
$default-h: 22px;
$default-h-2: $default-h - 4px;

$small-h: 16px;
$small-h-2: $small-h - 4px;

$large-h: 30px;
$large-h-2: $large-h - 4px;

$inactive-color: #dbdbdb;
$active-color: #18a058;
.xq-switch {
  height: $default-h;
  width: $default-h * 2;
  border: none;
  background: $inactive-color;
  border-radius: calc($default-h-2 / 1.5);
  position: relative;
  cursor: pointer;
  /* 解决移动端点击时有边框 */
  outline: none;
  -webkit-tap-highlight-color: #fff;
  -webkit-tap-highlight-color: transparent;

  &-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $default-h-2;
    width: $default-h-2;
    background: white;
    border-radius: calc($default-h-2 / 1.5);
    transition: all 250ms;
  }

  &.xq-switch-checked {
    background: $active-color;
    > span {
      left: calc(100% - $default-h-2 - 2px);
    }
    &.xq-switch-small > span {
      left: calc(100% - $small-h-2 - 2px);
    }

    &.xq-switch-large > span {
      left: calc(100% - $large-h-2 - 2px);
    }
  }

  &:active {
    > span {
      width: $default-h-2 + 4px;
    }

    &.xq-switch-small > span {
      width: $small-h-2 + 4px;
    }

    &.xq-switch-large > span {
      width: $large-h-2 + 4px;
    }
  }
  &.xq-switch-checked:active {
    > span {
      width: $default-h-2 + 4px;
      margin-left: -4px;
    }
    &.xq-switch-small > span {
      width: $small-h-2 + 4px;
      margin-left: -4px;
    }

    &.xq-switch-large > span {
      width: $large-h-2 + 4px;
      margin-left: -4px;
    }
  }

  &.xq-switch-small {
    height: $small-h;
    width: $small-h * 2;
    border-radius: calc($small-h-2 / 1.5);

    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $small-h-2;
      width: $small-h-2;
      background: white;
      border-radius: calc($small-h-2 / 1.5);
      transition: all 250ms;
    }
  }

  &.xq-switch-large {
    height: $large-h;
    width: $large-h * 2;
    border-radius: calc($large-h-2 / 1.5);

    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $large-h-2;
      width: $large-h-2;
      background: white;
      border-radius: calc($large-h-2 / 1.5);
      transition: all 250ms;
    }
  }
}
</style>
