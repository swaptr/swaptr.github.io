<script lanf="ts">
	import * as config from '$lib/config';
	import BlogHeader from '../../components/BlogHeader.svelte';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<!-- <BlogHeader /> -->
	<slot />
</section>
