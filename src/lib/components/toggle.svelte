<script lang="ts">
	import { theme } from '$lib/theme.svelte';
</script>

<button on:click={theme.toggle} aria-label="Toggle theme">
	{#if theme.current === 'dark'}
		<span>Light</span>
	{:else}
		<span>Dark</span>
	{/if}
</button>
