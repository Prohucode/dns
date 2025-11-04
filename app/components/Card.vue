<template>
	<div class="card">
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot></slot>
		</main>
	</div>
</template>

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
			width: 100%;
			border-bottom: 1px solid var(--gray-2);
			padding: 16px 18px;
            align-items: center;
            font-size: 24px;
		}
	}
</style>
