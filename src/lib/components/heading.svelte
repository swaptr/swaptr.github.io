<script lang="ts">
	let { children } = $props();
</script>

<p class="my-2 flex justify-center text-2xl font-bold">
	{@render children?.()}
</p>
