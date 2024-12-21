<script>
	import { description, links } from '$lib/config';
</script>

<section class="divide-y divide-muted/50">
	<div class="flex flex-row gap-x-4 p-4">
		<img
			alt="The project logo"
			src="https://avatars.githubusercontent.com/u/83858160?v=4"
			class="aspect-square size-16 rounded-full"
			height="64"
			width="64"
		/>
		<div class="flex flex-col gap-2">
			<p class="line-clamp-4">{description}</p>
			<div class="flex flex-row flex-wrap gap-x-2 text-sm">
				{#each links as link}
					<a href={link.value} id={link.id} target="_blank">
						<p>{link.label}↗</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
	<div class="p-4"></div>
</section>
