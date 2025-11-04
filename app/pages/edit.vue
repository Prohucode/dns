<template>
	<Card line>
		<template #header> <b>Товары</b> </template>
		<div class="page-products pa-24">

			<div class="ml-a">
				<Button @click="saveData">Отправить</Button>
			</div>

			<Table v-if="products">
				<thead>
					<tr>
						<th class="text-left">Название</th>
						<th class="text-left">Количество</th>
						<th class="text-left">Цена</th>
						<th class="text-left">Цвет</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in products" :key="item.name">
						<td>{{ item.name }}</td>
						<td>
							<Input v-model="item.amount" placeholder="Количество" />
						</td>
						<td>
							<Input v-model="item.price" :decimals="2" placeholder="Цена" />
						</td>
						<td>
							<Select v-model="item.color" :options="colors" placeholder="Выберите цвет" />
						</td>
					</tr>
				</tbody>
			</Table>

			<SkeletonTable v-else />
		</div>
	</Card>
</template>

<script setup lang="ts">
	const route = useRoute();
	const id = route.query.id;

	const { products, fetchProducts } = useProducts();

	const colors = [
		{ key: "white", label: "Белый" },
		{ key: "black", label: "Чёрный" },
		{ key: "blue", label: "Синий" },
		{ key: "red", label: "Красный" },
		{ key: "green", label: "Зелёный" },
		{ key: "yellow", label: "Жёлтый" },
	];

	async function saveData() {
		const { data, error } = await useFetch("/api/send", {
			method: "POST",
			body: {
				id: 1,
				products,
			},
		});

		if (error.value) {
			console.error("Ошибка сохранения:", error.value);
		} else {
			alert("Сохранено!");
		}
	}
</script>

<style scoped lang="scss">
	.page-products {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
