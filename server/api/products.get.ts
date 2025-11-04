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
		// { id: 11, name: "Apple Watch Ultra 2", price: 899.0, amount: 9, color: "yellow" },
		// { id: 12, name: "AirPods Pro (2nd Gen)", price: 279.0, amount: 40, color: "white" },
		// { id: 13, name: "AirPods Max", price: 599.0, amount: 18, color: "green" },
		// { id: 14, name: "HomePod mini", price: 129.0, amount: 25, color: "blue" },
		// { id: 15, name: "Apple TV 4K (2023)", price: 199.0, amount: 10, color: "black" },
		// { id: 16, name: "Magic Keyboard for iPad", price: 299.0, amount: 15, color: "white" },
		// { id: 17, name: "Magic Mouse 2", price: 99.0, amount: 35, color: "white" },
		// { id: 18, name: "MagSafe Charger", price: 49.0, amount: 50, color: "silver" },
		// { id: 19, name: "AirTag (4 Pack)", price: 119.0, amount: 60, color: "white" },
		// { id: 20, name: "Apple Pencil (2nd Gen)", price: 129.0, amount: 22, color: "white" },
	];
});
