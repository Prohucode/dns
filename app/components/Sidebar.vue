<template>
	<aside :class="['sidebar', { open: isOpen }]">
		<Card>
			<template #header>
				<div class="toggle">
					<Button variant="flat" icon v-if="!isOpen" @click="toggle">
						<Icon name="right" />
					</Button>
					<Button variant="flat" icon v-else @click="toggle">
						<Icon name="left" />
					</Button>
				</div>
			</template>

			<main>
				<slot></slot>
			</main>

			<template #footer>
				<slot name="footer"></slot>
			</template>
		</Card>
	</aside>
</template>

<script setup lang="ts">
	import { computed, ref } from "vue";

	interface Props {
		modelValue?: boolean; // ← теперь опционально
	}

	const props = defineProps<Props>();

	const emit = defineEmits<{
		(e: "update:modelValue", value: boolean): void;
	}>();

	const internalOpen = ref(false);

	const isOpen = computed({
		get: () => (props.modelValue !== undefined ? props.modelValue : internalOpen.value),
		set: (val: boolean) => {
			if (props.modelValue !== undefined) {
				emit("update:modelValue", val);
			} else {
				internalOpen.value = val;
			}
		},
	});

	const toggle = () => {
		isOpen.value = !isOpen.value;
	};
</script>

<style lang="scss" scoped>
	.sidebar {
		display: flex;
		transition: width 0.1s ease;
		width: 68px;

		&.open {
			width: 280px;
			.toggle {
				margin-left: auto;
			}
		}

		.title {
			display: flex;
			flex: 1 1 0px;
			align-items: center;
		}

		main {
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding: 0px;
			background-color: white;
			padding-top: 20px;
		}

		footer {
			padding: 16px 18px;
		}
	}
</style>
