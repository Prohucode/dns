<template>
  <div class="layout">
    <Sidebar v-if="showSidebar" v-model="sidebarOpen">
      <template #default>
        <SidebarItem
          to="/"
          icon="app"
          :mini="!sidebarOpen"
          :active="isActive('/')"
        >
          Заявки
        </SidebarItem>
        <!-- <SidebarItem
          to="/edit?id=1"
          icon="app"
          :mini="!sidebarOpen"
          :active="isActive('/edit')"
        >
          Изменения
        </SidebarItem> -->
      </template>
    </Sidebar>

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "~/components/Sidebar.vue";
import SidebarItem from "~/components/SidebarItem.vue";

const sidebarOpen = ref(true);
const route = useRoute();

const showSidebarPaths = ["/"];
const showSidebar = computed(() => showSidebarPaths.includes(route.path));

const currentPath = computed(() => route.path || "/");
const isActive = (path: string) => {
  if (path === "/") return currentPath.value === "/";
  return currentPath.value.startsWith(path);
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 24px 20px;
  gap: 20px;

  main {
    display: flex;
    flex: 1;
  }
}
</style>
