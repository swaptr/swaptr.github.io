<script>
	import Rss from '$lib/icon/rss.svelte';
</script>

<div class="flex h-6 items-center justify-between space-x-2 overflow-x-auto p-1 text-sm">
	<a href="/" class="shrink-0 font-bold">Swapnil Tripathi</a>
	<div class="flex flex-row items-center space-x-1">
		<a href="/b">Blog</a>
		<a href="/b/t">Tags</a>
		<a href="/p">Projects</a>
		<a href="/rss.xml">
			<Rss class="h-4 w-4" />
		</a>
	</div>
</div>
