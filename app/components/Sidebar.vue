<template>
	<aside :class="['sidebar', { open: isOpen }]">
		<header>
			<div class="title" v-show="isOpen">
				<slot name="title"></slot>
			</div>
			<div class="toggle">
				<Button variant="flat" icon v-if="!isOpen" @click="toggle">
					<Icon name="right" />
				</Button>
				<Button variant="flat" icon v-else @click="toggle">
					<Icon name="left" />
				</Button>
			</div>
		</header>

		<main>
			<slot></slot>
		</main>

		<footer>
			<slot name="footer"></slot>
		</footer>
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
		background-color: white;
		border-right: 1px solid #eee;
		display: flex;
		flex-direction: column;
		border-radius: var(--border-md);
		overflow: hidden;
		transition: width 0.3s ease;

		&.open {
			width: 280px;
		}

		header {
			display: flex;
			flex-direction: row;
			padding: 16px 18px;

			.title {
				display: flex;
				flex: 1 1 0px;
				align-items: center;
			}
		}

		main {
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding: 0px;
			background-color: white;
		}

		footer {
			padding: 16px 18px;
		}
	}
</style>
