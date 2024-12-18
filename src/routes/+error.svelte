<script>
	import { page } from '$app/state';
</script>

<div class="flex h-full flex-col items-center justify-center">
	<p>{page.status}</p>
	<p>{page.error?.message}</p>
	<a href="/">Home</a>
</div>
