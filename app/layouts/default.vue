<template>
  <div class="layout">
    <Sidebar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "~/components/Sidebar.vue";
</script>
