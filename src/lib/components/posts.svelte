<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Title from './title.svelte';

	let { posts } = $props();
</script>

<section class="flex flex-col">
	<ul class="flex flex-col">
		{#each posts as post}
			<a href={`/b/${post.slug}`} class="flex flex-col bg-background p-4 hover:brightness-150">
				<span class="flex flex-row flex-wrap justify-between">
					<Title>{post.title}</Title>
					<p>{formatDate(post.date)}</p>
				</span>
				<p class="line-clamp-2 text-sm text-muted">{post.description}</p>
			</a>
		{/each}
	</ul>
</section>
