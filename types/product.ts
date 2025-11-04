export interface Product {
	id: number;
	name: string;
	amount: number;
	price: number;
	color: string;
}

export interface RequestPayload {
	id: number;
	products: Product[];
}
