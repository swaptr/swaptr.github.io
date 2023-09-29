<script lang="ts">
	export let src = '';
	export let alt = '';
</script>

<div class="parent">
	<img {src} {alt} loading="lazy" />
</div>

<style>
	.parent {
		display: flex;
		justify-content: center;
	}

	img {
		border-radius: 5px;
	}
</style>
