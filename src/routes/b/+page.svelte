<script lang="ts">
	import * as config from '$lib/config';
	import Posts from '$lib/components/posts.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Posts posts={data.posts} />
