<script lang="ts">
	type Props = {
		src: string;
		alt: string;
	};

	let { src, alt }: Props = $props();
</script>

<div class="parent flex justify-center">
	<img {src} {alt} loading="lazy" />
</div>
