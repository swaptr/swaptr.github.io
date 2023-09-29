<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let value: string;
</script>

<div>
	{formatDate(value)}
</div>

<style>
</style>
