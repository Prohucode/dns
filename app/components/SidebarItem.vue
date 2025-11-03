<template>
  <NuxtLink :to="to" class="item">
    <span class="icon">{{ icon }}</span>
    <span class="label">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  label: string;
  to: string;
}>();
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: background 0.2s;

  &:hover {
    background: #f6f6f6;
  }

  .icon {
    font-size: 18px;
  }
}
</style>
