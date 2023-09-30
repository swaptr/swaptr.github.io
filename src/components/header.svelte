<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav class="header-container">
	<a href="/">
		<div class="logo">
			<img alt="s" src="/favicon.svg" />
			<h3 class="title">{config.title}</h3>
		</div>
	</a>
	<ul class="links">
		<li>
			<a href="/blog">blog</a>
		</li>
		<li>
			<a href="/about">about</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">rss</a>
		</li>
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		padding: 0;
	}

	.title {
		visibility: hidden;
	}

	@media (min-width: 640px) {
		.title {
			visibility: visible;
		}
	}

	.logo {
		display: flex;
		gap: 4px;
		flex-direction: row;
		align-items: center;
	}

	img {
		height: 28px;
	}

	.header-container {
		padding-block: 0.5em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		font-size: 1rem;
		padding-bottom: 8px;
	}

	.links {
		display: flex;
		gap: 15px;
		margin-block: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		opacity: 0.8;
	}
</style>
