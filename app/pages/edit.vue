<template>
  <div>
    <h1>Edit page</h1>
    <p>ID: {{ id }}</p>

    <p>{{ products }}</p>
    <p>{{ data }}</p>
    <MyButton @click="saveData">Сохранить изменения</MyButton>
    <MyButton variant="outline" @click="() => fetchProducts()">Серая</MyButton>
    <MyButton variant="flat" :disabled="true">Удалить</MyButton>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "#imports";
import MyButton from "~/components/MyButton.vue";

const route = useRoute();
const id = route.query.id;

const { data: data } = await useFetch("/api/table-data");

const { products, fetchProducts } = useProducts();

async function saveData() {
  const { data, error } = await useFetch("/api/send", {
    method: "POST",
    body: {
      id: 1,
      products,
    },
  });

  if (error.value) {
    console.error("Ошибка сохранения:", error.value);
  } else {
    alert("Сохранено!");
  }
}
</script>
