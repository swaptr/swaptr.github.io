<script lang="ts">
	let { data } = $props();
</script>

<div class="flex flex-row flex-wrap gap-2">
	{#each Object.entries(data.tags) as [tag, count]}
		<a class="text" href={`/b/t/${tag}`}>
			{tag}<sup class="text-muted">{count}</sup>
		</a>
	{/each}
</div>
