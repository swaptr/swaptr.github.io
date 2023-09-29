<script lang="ts">
	import type { Post } from '$lib/types';
	export let post: Post;
	import Date from '../components/Date.svelte';
	import Icon from './Icon.svelte';
</script>

<li class="post">
	<Icon src={post.image} size="75px" />
	<div class="post-col">
		<h2>
			<a href={`blog/${post.slug}`} class="title">{post.title}</a>
		</h2>
		<Date value={post.date} />
		<p class="description">{post.description}</p>
	</div>
</li>

<style>
	a {
		text-decoration: none;
	}

	.post-col {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.post {
		color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1.5rem;
	}

	h2 {
		margin: 0px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.description {
		width: auto;
	}

	p {
		color: gray;
		margin: 0px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
