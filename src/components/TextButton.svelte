<script lang="ts">
	export let label: string;
	export let onChange: () => void;
</script>

<button on:click={onChange}>
	{label}
</button>

<style>
	button {
		border: none;
		background-color: inherit;
		padding: 0px 0px;
		font-size: 15px;
		cursor: pointer;
		display: inline-block;
		color: white;
	}
	button:hover {
		opacity: 0.8;
	}
</style>
