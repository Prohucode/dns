<template>
	<Card>
		<template #header> <b>Товары</b> </template>
		<div>
			<h1>Edit page</h1>
			<p>ID: {{ id }}</p>

			<p>{{ products }}</p>
			<p>{{ data }}</p>
			<Button @click="saveData">Отправить</Button>
			<Button variant="outline" @click="() => fetchProducts()">Серая</Button>
			<Button variant="flat" :disabled="true">Удалить</Button>
		</div>
	</Card>
</template>

<script setup lang="ts">
	import { useRoute } from "#imports";
	import Button from "~/components/Button.vue";
	import Card from "~/components/Card.vue";

	const route = useRoute();
	const id = route.query.id;

	const { data: data } = await useFetch("/api/table-data");

	const { products, fetchProducts } = useProducts();

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
