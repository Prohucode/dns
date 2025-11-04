<template>
	<div class="table-wrapper">
		<table class="table">
			<slot></slot>
		</table>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
	.table-wrapper {
		background: white;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #f0f0f0;
	}
	.table {
		width: 100%;
		border-collapse: collapse;
		color: var(--black-1);
		text-align: left;
		table-layout: fixed;

		thead {
			font-weight: bold !important;
			color: var(--gray-3);
			font-size: 14px;
			background-color: var(--gray-1);

			th {
				padding: 15px 20px;
				border-bottom: 1px solid var(--gray-2);
			}
		}

		tbody {
			font-size: 16px;

			tr {
				border-bottom: 1px solid #f0f0f0;
				transition: background-color 0.2s ease;

				&:hover {
					background-color: #fafafa;
				}

				&:last-child {
					border-bottom: none;
				}
			}

			td {
				padding: 12px 16px;
				vertical-align: middle;

				/* вариант подсветки последней строки */
				&.highlight {
					background-color: #fffbea;
				}
			}
		}
	}
</style>
