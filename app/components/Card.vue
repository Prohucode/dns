<template>
	<div class="card">
		<header :class="[{ line }]">
			<slot name="header"></slot>
		</header>
		<main>
			<slot></slot>
		</main>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		line?: boolean;
	}>();
</script>

<style lang="scss" scoped>
	.card {

		display: flex;
		background-color: white;
		border-right: 1px solid #eee;
		flex-direction: column;
		border-radius: var(--border-md);
		overflow: hidden;
		width: 100%;

		header {
			display: flex;
			border-bottom: 1px solid transparent;
			padding: 16px 16px;
			align-items: center;
			flex-direction: row;
			font-size: 24px;
			min-height: 36px;

			&.line {
				border-bottom: 1px solid var(--gray-2);
			}
		}

		main{
			overflow-y: auto;
			overflow-x: hidden;
		}
	}
</style>
