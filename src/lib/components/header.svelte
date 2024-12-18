<script>
	import Briefcase from '$lib/icon/briefcase.svelte';
	import Pen from '$lib/icon/pen.svelte';
	import Rss from '$lib/icon/rss.svelte';
	import User from '$lib/icon/user.svelte';
</script>

<div class="flex justify-between">
	<a href="/">Swapnil Tripathi</a>
	<div class="flex flex-row items-center space-x-1">
		<a href="/b"> <Pen class="h-4 w-4" /></a>
		<a href="/p"> <Briefcase class="h-4 w-4" /></a>
		<a href="/about"> <User class="h-4 w-4" /></a>
		<a href="/rss.xml">
			<Rss class="h-4 w-4" />
		</a>
	</div>
</div>
