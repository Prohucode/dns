<template>
  <img
    class="icon"
    :class="[size, color]"
    :src="`/icons/${name}.svg`"
    alt=""
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
type IconName = "left" | "right" | "delete" | "check";

interface Props {
  name: IconName;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "danger";
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  color: "default",
});
</script>

<style scoped>
.icon {
  display: inline-flex;
  vertical-align: middle;
  line-height: 1;
}

/* Размеры */
.icon.sm {
  width: 16px;
  height: 16px;
}
.icon.md {
  width: 20px;
  height: 20px;
}
.icon.lg {
  width: 24px;
  height: 24px;
}

/* Цвета */
.icon.default {
  color: #333;
}
.icon.primary {
  color: #007bff;
}
.icon.danger {
  color: #e53935;
}

/* Если иконки одноцветные, можно управлять цветом через filter */
.icon {
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg);
}
.icon.primary {
  filter: invert(33%) sepia(98%) saturate(1559%) hue-rotate(194deg)
    brightness(97%) contrast(103%);
}
.icon.danger {
  filter: invert(39%) sepia(82%) saturate(3268%) hue-rotate(341deg)
    brightness(92%) contrast(91%);
}
</style>
