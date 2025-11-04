<template>
	<span
		class="icon"
		:class="size"
		:style="{
			maskImage: `url(/icons/${name}.svg)`,
			WebkitMaskImage: `url(/icons/${name}.svg)`,
			backgroundColor: resolvedColor,
		}"
	></span>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
	name: string;
	size?: "sm" | "md" | "lg";
	color?: string;
}

const props = withDefaults(defineProps<Props>(), {
	size: "md",
	color: "black-1",
});

const resolvedColor = computed(() => {
	const color = props.color?.trim();
	if (!color) return "gray";
	if (color.startsWith("var(")) return color;
	if (color.startsWith("#") || color.startsWith("rgb")) return color;
	if (color.startsWith("--")) return `var(${color})`;
	return `var(--${color})`;
});
</script>

<style lang="scss" scoped>
.icon {
	display: inline-block;
	mask-repeat: no-repeat;
	mask-position: center;
	mask-size: contain;
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: center;
	-webkit-mask-size: contain;
	background-color: currentColor;
}
.sm {
	width: 16px;
	height: 16px;
}
.md {
	width: 20px;
	height: 20px;
}
.lg {
	width: 32px;
	height: 32px;
}
</style>
