<template>
	<div
		class="skeleton"
		:style="{
			width,
			height,
			borderRadius,
		}"
	></div>
</template>

<script setup lang="ts">
interface Props {
	width?: string
	height?: string
	borderRadius?: string
}

withDefaults(defineProps<Props>(), {
	width: '100%',
	height: '16px',
	borderRadius: '8px',
})
</script>

<style scoped lang="scss">
.skeleton {
	position: relative;
	overflow: hidden;
	background: #e6e6e6b0;
	border-radius: inherit;

	/* Перелив */
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: -150%;
		width: 150%;
		height: 100%;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.6) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		animation: shimmer 1s infinite;
	}
}

@keyframes shimmer {
	0% {
		left: -150%;
	}
	100% {
		left: 150%;
	}
}
</style>
