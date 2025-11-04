<template>
	<Table>
		<thead>
			<tr>
				<th v-for="item in 5" :key="item" class="text-left"><Skeleton height="16px" border-radius="12px" /></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in 15" :key="item">
				<td v-for="item in 5"><Skeleton height="16px" border-radius="12px" /></td>
			</tr>
		</tbody>
	</Table>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
