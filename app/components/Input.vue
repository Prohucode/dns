<template>
	<div class="numeric-input">
		<input :value="displayValue" type="text" class="numeric-input__field" :placeholder="placeholder" @input="onInput" @blur="formatValue" />
		<button v-if="modelValue !== null && modelValue !== ''" class="numeric-input__clear" @click="$emit('update:modelValue', '')">✕</button>
	</div>
</template>

<script setup>
	import { computed } from "vue";

	const props = defineProps({
		modelValue: {
			type: [Number, String],
			default: "",
		},
		decimals: {
			type: Number,
			default: 0, // количество знаков после запятой
		},
		placeholder: {
			type: String,
			default: "",
		},
	});

	const emit = defineEmits(["update:modelValue"]);

	const displayValue = computed(() => {
		if (props.modelValue === null || props.modelValue === "") return "";
		return props.modelValue.toString();
	});

	function onInput(event) {
		let val = event.target.value.replace(",", ".");
		// Разрешаем только числа и одну точку
		val = val.replace(/[^0-9.]/g, "");
		if ((val.match(/\./g) || []).length > 1) {
			val = val.slice(0, val.lastIndexOf("."));
		}
		emit("update:modelValue", val);
	}

	function formatValue(event) {
		let val = parseFloat(event.target.value);
		if (isNaN(val)) {
			emit("update:modelValue", "");
		} else {
			val = val.toFixed(props.decimals);
			emit("update:modelValue", val);
		}
	}
</script>

<style scoped>
	.numeric-input {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
	}

	.numeric-input__field {
		width: 100%;
		padding: 8px 28px 8px 10px;
		border: 1px solid #ddd;
		border-radius: 6px;
		outline: none;
		font-size: 14px;
		transition: 0.2s;
	}

	.numeric-input__field:focus {
		border-color: #409eff;
		box-shadow: 0 0 2px rgba(64, 158, 255, 0.4);
	}

	.numeric-input__clear {
		position: absolute;
		right: 6px;
		background: none;
		border: none;
		cursor: pointer;
		color: #aaa;
		font-size: 14px;
	}

	.numeric-input__clear:hover {
		color: #555;
	}
</style>
