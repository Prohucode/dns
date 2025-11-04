<template>
	<div class="select-input" ref="selectRef">
		<div class="select-input__field" @click="toggleDropdown" :class="{ open: isOpen }">
			<span>{{ selectedLabel || placeholder }}</span>
			<svg class="select-input__icon" width="16" height="16" viewBox="0 0 24 24">
				<path fill="currentColor" d="M7 10l5 5 5-5H7z" />
			</svg>
		</div>

		<!-- Рендерим dropdown поверх всего -->
		<teleport to="body">
			<div v-if="isOpen" class="select-input__dropdown" :style="dropdownStyle">
				<div v-for="option in options" :key="option.key" class="select-input__option" :class="{ selected: option.key === modelValue }" @click="selectOption(option)">
					{{ option.label }}
					<span v-if="option.key === modelValue" class="select-input__check">✔</span>
				</div>
			</div>
		</teleport>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";

	const props = defineProps({
		modelValue: [String, Number, null],
		options: { type: Array, default: () => [] },
		placeholder: { type: String, default: "Выберите..." },
	});

	const emit = defineEmits(["update:modelValue"]);
	const isOpen = ref(false);
	const selectRef = ref(null);
	const dropdownStyle = ref({});

	const selectedLabel = computed(() => {
		const found = props.options.find((o) => o.key === props.modelValue);
		return found ? found.label : "";
	});

	function toggleDropdown() {
		if (isOpen.value) {
			isOpen.value = false;
		} else {
			openDropdown();
		}
	}

	function openDropdown() {
		isOpen.value = true;
		nextTick(() => {
			const rect = selectRef.value.getBoundingClientRect();
			dropdownStyle.value = {
				position: "fixed",
				top: rect.bottom + "px",
				left: rect.left + "px",
				width: rect.width + "px",
				zIndex: 9999,
			};
		});
	}

	function selectOption(option) {
		emit("update:modelValue", option.key);
		isOpen.value = false;
	}

	// Закрытие при клике вне
	function handleClickOutside(event) {
		if (selectRef.value && !selectRef.value.contains(event.target)) {
			isOpen.value = false;
		}
	}

	onMounted(() => document.addEventListener("click", handleClickOutside));
	onBeforeUnmount(() => document.removeEventListener("click", handleClickOutside));
</script>

<style scoped>
	.select-input {
		position: relative;
		width: 100%;
		font-size: 14px;
		color: #333;
	}

	.select-input__field {
		background: #fff;
		border: 1px solid #ddd;
		border-radius: 6px;
		padding: 8px 32px 8px 10px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: 0.2s;
	}

	.select-input__field.open {
		border-color: #ff9800;
		box-shadow: 0 0 2px rgba(255, 152, 0, 0.4);
	}

	.select-input__icon {
		position: absolute;
		right: 10px;
		color: #888;
		transition: transform 0.2s;
	}

	.select-input__field.open .select-input__icon {
		transform: rotate(180deg);
	}

	/* dropdown теперь fixed, поэтому не обрежется */
	.select-input__dropdown {
		background: #fff;
		border: 1px solid #eee;
		border-radius: 6px;
		margin-top: 4px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
		max-height: 200px;
		overflow-y: auto;
	}

	.select-input__option {
		padding: 8px 12px;
		cursor: pointer;
		transition: background 0.2s;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.select-input__option:hover {
		background: #f8f8f8;
	}

	.select-input__option.selected {
		color: #ff9800;
		font-weight: 500;
	}

	.select-input__check {
		font-size: 12px;
		color: #ff9800;
	}
</style>
