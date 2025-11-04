<template>
	<NuxtLink :to="to" :class="['item', { active, mini }]">
		<div class="icon">
			<Icon v-if="icon" :name="icon" :color="active ? 'brand-1' : 'black-1'" />
		</div>
		<div class="title" v-show="!mini">
			<slot></slot>
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
	defineProps<{
		to: string;
		icon?: string;
		active?: boolean;
		mini?: boolean;
	}>();
</script>

<style lang="scss" scoped>
	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-decoration: none;
		color: var(--black-1);
		border-left: 2px solid transparent;
		padding: 0px 16px;
		gap: 10px;

		&.active {
			color: var(--brand-1);
			border-left: 2px solid var(--brand-1);

			&.mini {
				.icon {
					background-color: var(--brand-3);
				}
			}
		}

		> .icon {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: var(--padding-sm);
			border-radius: var(--radius);
		}
	}
</style>
