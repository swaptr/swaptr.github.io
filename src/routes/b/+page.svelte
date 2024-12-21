<script lang="ts">
	import * as config from '$lib/config';
	import Posts from '$lib/components/posts.svelte';
	import Heading from '$lib/components/heading.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Heading>Posts</Heading>
<Posts posts={data.posts} />
