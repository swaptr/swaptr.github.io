<script lang="ts">
	import TextButton from './TextButton.svelte';
	import Modal from './modal.svelte';
	let showModal = false;
</script>

<div class="blog-header">
	<ul class="filters">
		<li>
			<TextButton
				label="tags"
				onChange={() => {
					showModal = true;
				}}
			/>
		</li>
	</ul>
</div>

<Modal bind:showModal>
	<h3 slot="modal-header">Tags</h3>
	<p>
		<b>Hello</b>
	</p>
</Modal>

<style>
	ul {
		list-style: none;
		padding: 0;
	}

	.filters {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 15px;
		margin-block: 0;
	}
</style>
