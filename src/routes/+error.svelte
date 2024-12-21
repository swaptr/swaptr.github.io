<script lang="ts">
	import { page } from '$app/state';
	import Heading from '$lib/components/heading.svelte';

	const { status, error } = page;
</script>

<div class="flex h-full flex-col items-center justify-center text-center">
	<Heading>
		{status}<br />{error?.message}
	</Heading>
	<nav class="flex flex-row flex-wrap justify-center gap-2 text-sm">
		<a href="/" aria-label="Go to Home">Home↗</a>
		<a href="/posts" aria-label="Go to Posts">Posts↗</a>
		<a href="/projects" aria-label="Go to Projects">Projects↗</a>
	</nav>
</div>
