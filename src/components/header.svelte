<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav class="header-container">
	<a href="/">
		<div class="logo">
			<img alt="s" src="favicon.ico" />
			<b class="title">{config.title}</b>
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
	.header-container {
		font-size: 1rem;
	}

	.title {
		visibility: hidden;
	}

	@media (min-width: 768px) {
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
		filter: invert(1);
	}

	nav {
		padding-block: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
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
</style>
