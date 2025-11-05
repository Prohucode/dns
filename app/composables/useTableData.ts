import type { Order } from "../../types/order";

export function useTableData() {

	const orders = ref<Order[]>([])
	const loading = ref(false)
	const error = ref<Error | null>(null)

	async function fetchTableData() {

		loading.value = true
		try {
			const res = await $fetch<Order[]>("/api/table-data")
			orders.value = res
		} catch (err) {
			error.value = err as Error
			console.error("Ошибка загрузки:", err)
		} finally {
			loading.value = false
		}

	}

	return {
		orders,
		loading,
		error,
		fetchTableData,
	};

}


