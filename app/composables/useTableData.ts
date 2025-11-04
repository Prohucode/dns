import type { Order } from "../../types/order";

export function useTableData() {
	const {
		data: orders,
		pending: loading,
		error,
		refresh: fetchTableData,
	} = useAsyncData<Order[]>("orders", async () => {
		const res = await $fetch<Order[]>("/api/table-data");
		return res;
	});

	return {
		orders,
		loading,
		error,
		fetchTableData,
	};
}
