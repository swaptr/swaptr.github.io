<script lanf="ts">
	import * as config from '$lib/config';
	import Post from '../../components/Post.svelte';
	export let data;
</script>

<svelte:head>
	<title>Blog | {config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#if data.posts.length === 0}
			<section class="empty">
				<span>No posts found</span>
			</section>
		{:else}
			{#each data.posts as post}
				<Post {post} />
			{/each}
		{/if}
	</ul>
</section>

<style>
	.empty {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.posts {
		display: grid;
		gap: 2rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}
</style>
