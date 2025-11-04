<template>
	<button :class="['button', variant, { disabled, icon }]" :disabled="disabled" @click="onClick">
		<slot />
	</button>
</template>

<script setup lang="ts">
	type Props = {
		variant?: "brand" | "outline" | "flat";
		disabled?: boolean;
		icon?: boolean;
	};

	const props = withDefaults(defineProps<Props>(), {
		variant: "brand",
		disabled: false,
		icon: false,
	});

	const emit = defineEmits<{
		(e: "click", event: MouseEvent): void;
	}>();

	function onClick(event: MouseEvent) {
		if (!props.disabled) emit("click", event);
	}
</script>

<style lang="scss" scoped>

	.button {
		border: none;
		background-color: white;
		border-radius: var(--radius);
		padding: var(--space-sm) var(--space-md);
		font-family: var(--font-main);

		&.brand {
			border: none;
			background: linear-gradient(101.36deg, var(--brand-1) 0%, var(--brand-2) 100%);
			font-weight: bold;
			color: white;
		}

		&.outline {
			border: 1px solid var(--gray-2);
			color: var(--black-1);
		}

		&.flat {
			background-color: var(--gray-1);
		}

		&.icon {
			padding: 0;
			width: 36px;
			aspect-ratio: 1 / 1;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
