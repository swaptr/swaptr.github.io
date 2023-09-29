<script lang="ts">
	export let src: string;
	export let size: string;
</script>

<img {src} alt={src} style={`max-height: ${size};`} />

<style>
	img {
		border-radius: 5px;
	}
</style>
