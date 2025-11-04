import type { Product } from "../../types/product";

export function useProducts() {
	const {
		data: products,
		pending: loading,
		error,
		refresh: fetchProducts,
	} = useAsyncData<Product[]>("products", async () => {
		const res = await $fetch<Product[]>("/api/products");
		return res;
	});

	return {
		products,
		loading,
		error,
		fetchProducts,
	};
}
