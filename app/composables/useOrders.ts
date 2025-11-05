import type { Product } from "~~/types/product";
import type { Order } from "../../types/order";
import {
  getStoredOrderProducts,
  clearStoredOrderProducts,
} from "~/utils/storage";

export function useOrders() {
  const orders = ref<Order[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  async function fetchOrders() {
    loading.value = true;
    try {
      const res = await $fetch<Order[]>("/api/table-data");
      orders.value = res;
    } catch (err) {
      error.value = err as Error;
      console.error("Ошибка загрузки:", err);
    } finally {
      loading.value = false;
    }
  }

  async function sendOrder(order_id: number) {
    try {
      loading.value = true;
      const products = getStoredOrderProducts(order_id);
      if (!products) throw new Error("Нет данных для отправки");

      const res = await $fetch("/api/send", {
        method: "POST",
        body: { id: order_id, products },
      });

      if (res.success) {
        clearStoredOrderProducts(order_id);
        alert(`Ответ : ${JSON.stringify(res)}`);
        await fetchOrders();
      }
    } catch (err) {
      console.error("Ошибка при отправке заявки:", err);
    } finally {
      loading.value = false;
    }
  }

  return {
    orders,
    loading,
    error,
    fetchOrders,
    sendOrder,
  };
}
