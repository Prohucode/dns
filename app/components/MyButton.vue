<template>
  <button
    :class="['button', variant, { disabled, icon }]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">

type Props = {
  variant?: "brand" | "outline" | "flat";
  disabled?: boolean;
  icon?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  variant: "brand",
  disabled: false,
  icon: false,
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

function onClick(event: MouseEvent) {
  if (!props.disabled) emit("click", event);
}
</script>
