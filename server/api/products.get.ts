import type { Product } from "../../types/product";

export default defineEventHandler(async (): Promise<Product[]> => {
  await new Promise((r) => setTimeout(r, 2000));
  return [
    { id: 1, name: "Товар 1", price: 123.45 },
    { id: 2, name: "Товар 2", price: 678.9 },
  ];
});
