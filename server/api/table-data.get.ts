import type { Order } from "../../types/order";

export default defineEventHandler(async (): Promise<Order[]> => {
	await new Promise((r) => setTimeout(r, 500));
	return [
		{ id: 1, date: "2025-01-02", name: "25-135443", status: "Активна", result: "В обработке" },
		{ id: 2, date: "2025-01-05", name: "25-135512", status: "Черновик", result: "Ожидает подтверждения" },
		{ id: 3, date: "2025-01-10", name: "25-135621", status: "Завершена", result: "Успешно выполнена" },
		{ id: 4, date: "2025-01-12", name: "25-135744", status: "Активна", result: "В работе" },
		{ id: 5, date: "2025-01-15", name: "25-135823", status: "Ошибка", result: "Отклонена системой" },
		{ id: 6, date: "2025-01-20", name: "25-135911", status: "Завершена", result: "Успешно завершена" },
		{ id: 7, date: "2025-01-23", name: "25-136021", status: "Активна", result: "В обработке" },
		{ id: 8, date: "2025-01-28", name: "25-136134", status: "Черновик", result: "Не отправлена" },
		{ id: 9, date: "2025-02-01", name: "25-136221", status: "Отменена", result: "Отменена пользователем" },
		{ id: 10, date: "2025-02-03", name: "25-136330", status: "Активна", result: "Выполняется" },
	];
});
