<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="flex flex-col">
		{#each data.posts as post}
			<a href={`/b/${post.slug}`} class="flex flex-col">
				<span class="flex flex-row flex-wrap items-center justify-between font-bold">
					<p>{post.title}</p>
					<p>{formatDate(post.date)}</p>
				</span>
				<p class="line-clamp-2 text-sm text-muted">{post.description}</p>
			</a>
		{/each}
	</ul>
</section>
