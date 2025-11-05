import type { Product } from "../../types/product";

export default defineEventHandler(async (): Promise<Product[]> => {
	await new Promise((r) => setTimeout(r, 2000));
	return [
		{ id: 1, name: "iPhone 15 Pro", price: 1299.99, amount: 12, color: "black" },
		{ id: 2, name: "iPhone 15", price: 999.99, amount: 20, color: "blue" },
		{ id: 3, name: "iPhone 14 Plus", price: 899.99, amount: 15, color: "red" },
		{ id: 4, name: "iPhone SE (3rd Gen)", price: 499.99, amount: 25, color: "white" },
		{ id: 5, name: "MacBook Air 13 M2", price: 1499.99, amount: 8, color: "gray" },
		{ id: 6, name: "MacBook Pro 14 M3 Pro", price: 2199.99, amount: 6, color: "silver" },
		{ id: 7, name: "iPad Pro 12.9 (6th Gen)", price: 1299.0, amount: 10, color: "black" },
		{ id: 8, name: "iPad Air (5th Gen)", price: 749.0, amount: 12, color: "blue" },
		{ id: 9, name: "iPad mini (6th Gen)", price: 649.0, amount: 14, color: "purple" },
		{ id: 10, name: "Apple Watch Series 9", price: 549.0, amount: 30, color: "red" },
	];
});
