<script lang="ts">
	import Heading from '$lib/components/heading.svelte';

	let { data } = $props();
</script>

<Heading>Tags</Heading>
<div class="flex flex-row flex-wrap gap-x-2 p-4">
	{#each Object.entries(data.tags) as [tag, count]}
		<a class="text" href={`/b/t/${tag}`}>
			{tag}<sup class="text-muted">{count}</sup>
		</a>
	{/each}
</div>
