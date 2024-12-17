<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="">
	<Header />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
