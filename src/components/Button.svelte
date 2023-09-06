<script lang="ts">
	export let label: string;
	export let onChange: () => void;
</script>

<button on:click={onChange}>
	{label}
</button>

<style>
	button {
		border: 1px solid;
		border-color: gray;
		background-color: inherit;
		padding: 5px 10px;
		font-size: 15px;
		cursor: pointer;
		display: inline-block;
		color: white;
		border-radius: 2px;
	}

	button:hover {
		opacity: 0.8;
	}
</style>
