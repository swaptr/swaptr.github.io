<script lang="ts">
	export let src: string;
	export let size: string;
</script>

<img {src} alt={src} width={size} height={size} />

<style>
	img {
		border-radius: 5px;
		filter: brightness(0) invert(1);
	}
</style>
