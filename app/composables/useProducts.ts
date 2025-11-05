import type { Product } from '../../types/product'
import {
	getStoredProducts,
	setStoredProducts,
	getStoredOrderProducts
} from "~/utils/storage"

export function useProducts(order_id: number) {

	const products = ref<Product[]>([])
	const loading = ref(false)
	const error = ref<Error | null>(null)


	async function fetchProducts() {

		// проверяем есть ли сохранённые данные по заявке
		let store_order_products = getStoredOrderProducts(order_id)
		if (store_order_products) {
			products.value = store_order_products
			console.log("Загружен сохранённый элемент заявки из localStorage")
			return
		}

		// если данные локально не сохранялись то смотрим есть ли шаблонный кэш
		const saved = getStoredProducts()
		if (saved) {
			products.value = saved
			console.log("Загружен шаблон из localStorage")
			return
		}


		// если вообще голяк то запрашиваем по ручке /api/products
		loading.value = true
		try {
			console.log("Загружаем из API")
			const res = await $fetch<Product[]>("/api/products")
			products.value = res
			setStoredProducts(res)
			console.log("Сохранено в localStorage")
		} catch (err) {
			error.value = err as Error
			console.error("Ошибка загрузки:", err)
		} finally {
			loading.value = false
		}


	}

	return {
		products,
		loading,
		error,
		fetchProducts,
	}
}
