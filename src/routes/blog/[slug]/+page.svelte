<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Icon from '../../../components/Icon.svelte';
	import CopyCodeInjector from '../../../components/CopyCodeInjector.svelte';
	import Tag from '../../../components/Tag.svelte';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} | {config.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<div class="header">
		<Icon src={data.meta.image} size="100px" />
		<div class="metadata">
			<span class="title">{data.meta.title}</span>
			<div class="tags">
				{#each data.meta.categories as category}
					<Tag {category} />
				{/each}
			</div>
			<p>{formatDate(data.meta.date)}</p>
		</div>
	</div>

	<div class="prose">
		<CopyCodeInjector>
			<svelte:component this={data.content} />
		</CopyCodeInjector>
	</div>
</article>

<p class="sponsor-tag">This work was sponsored by the <b>{data.meta.sponsor}</b>.</p>

<style>
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}

	.metadata {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.title {
		font-size: x-large;
		font-weight: bold;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.tags {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.prose {
		margin: 10px 0px;
		text-align: justify;
		text-justify: inter-word;
	}

	.sponsor-tag {
		font-style: italic;
		text-align: center;
		color: rgba(255, 255, 255, 0.75);
		margin-top: 50px;
	}
</style>
