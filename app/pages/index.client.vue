<template>
  <Card line>
    <template #header> <b class="pa-16">Заявки</b> </template>
    <div class="pa-24">
      <Table v-if="orders.length">
        <thead>
          <tr>
            <th class="text-left">Номер</th>
            <th class="text-left">Статус</th>
            <th class="text-left">Результат</th>
            <th class="text-left">Дата создания</th>
            <th class="text-left">Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in orders"
            :key="order.id"
            :class="{ active: getStoredOrderProducts(order.id) }"
          >
            <td>
              {{ order.name }}
            </td>
            <td>
              <Chip>{{ order.status }}</Chip>
            </td>
            <td>
              {{ order.result }}
            </td>
            <td>
              {{ formatDate(order.date) }}
            </td>
            <td>
              <Button
                v-if="getStoredOrderProducts(order.id)"
                variant="brand"
                @click="send(order.id)"
                >Отправить</Button
              >
              <Button v-else variant="outline" @click="editOrder(order.id)"
                >Редактировать</Button
              >
            </td>
          </tr>
        </tbody>
      </Table>
      <SkeletonTable v-else />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { formatDate } from "~/utils/formatDate";

const router = useRouter();
const { orders, fetchOrders, sendOrder } = useOrders();

onMounted(() => {
  fetchOrders();
});

function editOrder(order_id: number) {
  navigateTo({
    path: "/edit",
    query: { id: order_id },
  });
}

async function send(order_id: number) {
  console.log(order_id);
  sendOrder(order_id);
}
</script>

<style scoped lang="scss">
.active {
  background-color: var(--brand-3);
}
</style>
