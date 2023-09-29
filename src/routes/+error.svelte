<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="error">
	<h1>{$page.status}</h1>
	<span>{$page.error?.message}</span>
</section>

<style>
	.error {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>
