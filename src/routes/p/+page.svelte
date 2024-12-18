<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={`/p/${post.slug}`} class="flex flex-row items-center justify-between">
					<p class="text-lg font-bold">{post.title}</p>
					<p class="text-muted">{formatDate(post.date)}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
