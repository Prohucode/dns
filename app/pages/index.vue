<template>
	<Card line>
		<template #header> <b class="pa-16">Заявки</b> </template>
		<div class="pa-24">
			<Table v-if="orders">
				<thead>
					<tr>
						<th class="text-left">Номер</th>
						<th class="text-left">Статус</th>
						<th class="text-left">Результат</th>
						<th class="text-left">Дата создания</th>
						<th class="text-left">Действие</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in orders" :key="item.name">
						<td>{{ item.name }}</td>
						<td>
							<Chip>{{ item.status }}</Chip>
						</td>
						<td>{{ item.result }}</td>
						<td>{{ formatDate(item.date) }}</td>
						<td>
							<Button variant="outline">Редактировать</Button>
						</td>
					</tr>
				</tbody>
			</Table>

			<SkeletonTable v-else />
		</div>
	</Card>
</template>

<script setup lang="ts">
	import { formatDate } from "~/utils/formatDate";
	const { orders, fetchTableData } = useTableData();
</script>
