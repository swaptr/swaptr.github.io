<script lang="ts">
	import Heading from '$lib/components/heading.svelte';
	import Posts from '$lib/components/posts.svelte';

	let { data } = $props();
</script>

<Heading>Posts tagged "{data.slug}"</Heading>
<Posts posts={data.posts} />
