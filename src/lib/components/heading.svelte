<script lang="ts">
	let { children } = $props();
</script>

<p class="flex justify-center text-xl font-bold">
	{@render children?.()}
</p>
