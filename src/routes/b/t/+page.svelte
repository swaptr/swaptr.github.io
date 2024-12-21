<script lang="ts">
	import Heading from '$lib/components/heading.svelte';

	let { data } = $props();
</script>

<Heading>Tags</Heading>
<div class="flex flex-col">
	{#each Object.entries(data.tags) as [tag, count]}
		<a class="bg-background p-1 text-center hover:brightness-150" href={`/b/t/${tag}`}>
			{tag}<sup class="text-muted">{count}</sup>
		</a>
	{/each}
</div>
