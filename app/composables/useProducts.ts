import type { Product } from '../../types/product'

export function useProducts() {
  const {
    data: products,
    pending: loading,
    error,
    refresh: fetchProducts,
  } = useAsyncData<Product[]>('products', () => $fetch('/api/products'))

  return {
    products,
    loading,
    error,
    fetchProducts,
  }
}
