<script lang="ts">
	import Button from './Button.svelte';

	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="modal-header" />
		<slot />
		<Button
			label="close"
			onChange={() => {
				dialog.close();
			}}
		/>
		<!-- svelte-ignore a11y-autofocus -->
	</div>
</dialog>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
	}

	dialog {
		max-width: 100%;
		max-height: 100%;
		border: 1px;
		border-color: gray;
		border-style: solid;
		border-radius: 5px;
		padding: 0;
		background-color: black;
		color: white;
		margin: 15px 15px 15px 15px;
	}

	@media (min-width: 768px) {
		dialog {
			width: 32rem;
			margin: auto auto;
		}
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	dialog > div {
		padding: 1em;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
