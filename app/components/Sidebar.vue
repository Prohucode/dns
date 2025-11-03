<template>

  <aside :class="['sidebar', { collapsed }]">

    <div class="toggle">
      <MyButton variant="flat" icon v-if="collapsed" @click="toggle">
        <Icon name="right" />
      </MyButton>
      <MyButton variant="flat" icon v-else @click="toggle"
        ><Icon name="left"
      /></MyButton>
    </div>
<!-- 
    <nav>
      <SidebarItem icon="📋" label="Заявки" to="/requests" />
      <SidebarItem icon="📦" label="Товары" to="/products" />
      <SidebarItem icon="⚙️" label="Настройки" to="/settings" />
    </nav> -->


  </aside>
</template>

<script setup lang="ts">
import SidebarItem from "./SidebarItem.vue";

const collapsed = ref(false);
const toggle = () => (collapsed.value = !collapsed.value);
</script>

<style lang="scss" scoped>
.sidebar {
  width: 220px;
  transition: width 0.3s ease;
  background: #fff;
  border-right: 1px solid #eee;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 16px;

  &.collapsed {
    width: auto;

    .label {
      display: none;
    }
  }

  .toggle {
    padding: 8px;
    font-size: 18px;
    display: flex;
    justify-content: end;
  }

  nav {
    margin-top: 20px;
  }
}
</style>
