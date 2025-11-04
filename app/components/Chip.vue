<template>
	<div :class="['chip', variant]">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
	type Props = {
		variant?: "green" | "brand";
	};

	const props = withDefaults(defineProps<Props>(), {
		variant: "green",
	});
</script>

<style lang="scss" scoped>
	.chip {
		display: inline-flex;
		font-size: 12px;
		padding: 4px 8px;
		border-radius: 4px;

		&.green {
			color: var(--green-1);
			background-color: var(--green-2);
		}
	}
</style>
