<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import '../app.css';
	import PageTransition from './transition.svelte';

	export let data;
</script>

<div class="layout">
	<Header />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1280px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: 1rem;
	}

	main {
		margin: 0rem 0rem;
	}

	@media (min-width: 24rem) {
		main {
			margin: 0rem 1rem;
		}
	}

	@media (min-width: 36rem) {
		main {
			margin: 0rem 1.5rem;
		}
	}

	@media (min-width: 48rem) {
		main {
			margin: 0rem 2rem;
		}
	}

	@media (min-width: 80rem) {
		.layout {
			padding-inline: 0;
			margin-inline: auto;
		}

		main {
			margin: 0.5rem 4rem;
		}
	}
</style>
