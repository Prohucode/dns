<template>
  <Card line>
    <template #header>
      <div class="pa-16 flex center-h">
        <NuxtLink class="pa-8 flex center-h" to="/">
          <Icon  name="back" color="black-2" />
        </NuxtLink>
        <b>Товары</b>
      </div>
    </template>
    <div class="page-products pa-24">
      <div class="ml-a">
        <Button @click="saveData">Сохранить</Button>
      </div>

      <Table v-if="products.length">
        <thead>
          <tr>
            <th class="text-left">Название</th>
            <th class="text-left">Количество</th>
            <th class="text-left">Цена</th>
            <th class="text-left">Цвет</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.name">
            <td>{{ product.name }}</td>
            <td>
              <Input
                v-model="product.amount"
                placeholder="Количество"
                :class="{ error: errors[product.id]?.amount }"
              />
            </td>
            <td>
              <Input
                v-model="product.price"
                :decimals="2"
                placeholder="Цена"
                :class="{ error: errors[product.id]?.price }"
              />
            </td>
            <td>
              <Select
                v-model="product.color"
                :options="colors"
                placeholder="Выберите цвет"
                :class="{ error: errors[product.id]?.color }"
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <SkeletonTable v-else />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { setStoredOrderProducts } from "~/utils/storage";
const route = useRoute();
const id = parseInt(route.query.id as string);
const { products, fetchProducts } = useProducts(id);

onMounted(() => {
  fetchProducts();
});

const colors = [
  { key: "white", label: "Белый" },
  { key: "black", label: "Чёрный" },
  { key: "blue", label: "Синий" },
  { key: "red", label: "Красный" },
  { key: "green", label: "Зелёный" },
  { key: "yellow", label: "Жёлтый" },
];

// ошибки по id товара
const errors = ref<
  Record<number, { amount?: boolean; price?: boolean; color?: boolean }>
>({});

function validate() {
  let valid = true;
  errors.value = {};

  const allowedColors = colors.map((c) => c.key);
  const numPattern = /^\d+(\.\d+)?$/;

  for (const p of products.value) {
    const productErrors: any = {};

    if (!numPattern.test(String(p.amount))) {
      productErrors.amount = true;
      valid = false;
    }

    if (!numPattern.test(String(p.price))) {
      productErrors.price = true;
      valid = false;
    }

    if (!allowedColors.includes(p.color)) {
      productErrors.color = true;
      valid = false;
    }

    if (Object.keys(productErrors).length > 0) {
      errors.value[p.id] = productErrors;
    }
  }

  return valid;
}



async function saveData() {

  if (!validate()) {
    alert("Проверьте корректность введённых данных!");
    return;
  }

  setStoredOrderProducts(id, products.value);
  await navigateTo({ path: "/" });
}

</script>

<style scoped lang="scss">
.page-products {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.error {
  border: 1px solid red !important;
  border-radius: 4px;
}
</style>
