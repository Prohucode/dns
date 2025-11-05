<template>
	<Card line>
		<template #header> <b class="pa-16">Заявки</b> </template>
		<div class="pa-24">
			<Table v-if="orders.length">
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
					<tr v-for="order in orders" :key="order.id">
						<td>
							{{ order.name }}
						</td>
						<td>
							<Chip>{{ order.status }}</Chip>
						</td>
						<td>
							{{ order.result }}
						</td>
						<td>
							{{ formatDate(order.date) }}
						</td>
						<td>
							<Button v-if="getStoredOrderProducts(order.id)" variant="brand"
								@click="sendOrder(order.id)">Отправить</Button>
							<Button v-else variant="outline" @click="editOrder(order.id)">Редактировать</Button>
						</td>
					</tr>
				</tbody>
			</Table>
			<SkeletonTable v-else />
		</div>
	</Card>
</template>

<script setup lang="ts">

import { getStoredOrderProducts, clearStoredOrderProducts } from "~/utils/storage"
import { formatDate } from "~/utils/formatDate";

const router = useRouter()
const { orders, fetchTableData } = useTableData();

onMounted(() => {
	fetchTableData()
})

function editOrder(order_id: number) {
	router.push(`/edit?id=${order_id}`)
}

async function sendOrder(order_id: number) {
	console.log(order_id)
	clearStoredOrderProducts(order_id)
}

</script>
