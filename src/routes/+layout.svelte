<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex flex-1 justify-center">
		<div class="w-full max-w-5xl">
			{@render children?.()}
		</div>
	</main>
</div>
