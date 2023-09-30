<script lang="ts">
	import Modal from '../../components/modal.svelte';
	import Image from '../../components/Image.svelte';
	import 'iconify-icon';
	import * as config from '$lib/config';

	let showModal = false;

	import { onMount } from 'svelte';

	onMount(() => {
		const bitcoinAddress = document.getElementById('bitcoin-address')!;

		bitcoinAddress.addEventListener('click', function () {
			var textToCopy = config.bitcoinAddress;
			navigator.clipboard.writeText(textToCopy);
		});
	});
</script>

<svelte:head>
	<title>About | {config.title}</title>
</svelte:head>

<div class="content">
	<Image src="user.jpg" size="100px" />
	<p>
		Hello, my name is Swapnil. I am an open source engineer based in India. Presently I am working
		on cloud technologies and blockchains.
	</p>
	<div class="icons">
		<iconify-icon class="icon" icon="cib:rust" />
		<iconify-icon class="icon" icon="carbon:machine-learning-model" />
		<iconify-icon class="icon" icon="file-icons:c" />
		<iconify-icon class="icon" icon="material-symbols:android" />
		<iconify-icon class="icon" icon="cib:python" />
		<iconify-icon class="icon" icon="mdi:nodejs" />
		<iconify-icon class="icon" icon="cib:react" />
		<iconify-icon class="icon" icon="cib:javascript" />
		<iconify-icon class="icon" icon="cib:typescript" />
		<iconify-icon class="icon" icon="cib:svelte" />
		<iconify-icon class="icon" icon="akar-icons:django-fill" />
		<iconify-icon class="icon" icon="cib:cassandra" />
		<iconify-icon class="icon" icon="simple-icons:zeromq" />
		<iconify-icon class="icon" icon="simple-icons:redis" />
		<iconify-icon class="icon" icon="tabler:sql" />
		<iconify-icon class="icon" icon="cib:kotlin" />
		<iconify-icon class="icon" icon="cib:go" />
		<iconify-icon class="icon" icon="mdi:aws" />
		<iconify-icon class="icon" icon="cib:mongodb" />
		<iconify-icon class="icon" icon="mdi:docker" />
		<iconify-icon class="icon" icon="cib:kubernetes" />
		<iconify-icon class="icon" icon="simple-icons:qt" />
	</div>
	<p>Socials:</p>
	<div class="icons">
		<a target="_blank" href="https://github.com/swaptr">
			<iconify-icon class="icon" icon="mdi:github" />
		</a>
		<a target="_blank" href="https://twitter.com/swaptr06">
			<iconify-icon class="icon" icon="teenyicons:twitter-outline" />
		</a>
		<a target="_blank" href="https://www.kaggle.com/swaptr">
			<iconify-icon class="icon" icon="cib:kaggle" />
		</a>
		<a target="_blank" href="https://www.linkedin.com/in/swapnil-tripathi-53b07b23a/">
			<iconify-icon class="icon" icon="bi:linkedin" />
		</a>
	</div>
	<p>Sponsor:</p>
	<button class="bitcoin-button" on:click={() => (showModal = true)}>
		<iconify-icon class="bitcoin-icon" icon="logos:bitcoin" />
	</button>
</div>

<Modal bind:showModal>
	<h3 slot="modal-header">Sponsor</h3>
	<Image src="qr.png" size="18rem" />
	<p id="bitcoin-address" class="bitcoin-address">
		<iconify-icon class="inner-icon" icon="logos:bitcoin" />
		{config.bitcoinAddress}
		<iconify-icon class="inner-icon" icon="ph:copy-thin" />
	</p>
</Modal>

<style>
	.inner-icon {
		font-size: x-large;
	}

	.bitcoin-address {
		border: 1px solid darkgrey;
		padding: 10px;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		font-size: smaller;
	}

	.bitcoin-address:hover {
		background-color: #1c1c1c;
		cursor: pointer;
	}

	.bitcoin-address:hover .inner-icon {
		color: lightgreen;
	}

	.icons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		max-width: 30rem;
		justify-content: center;
		gap: 0.3rem;
	}

	.icon {
		color: white;
		font-size: x-large;
	}

	.content {
		display: flex;
		flex-direction: column;
		height: 80vh;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	p {
		max-width: 36rem;
		text-align: center;
	}

	.bitcoin-button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		outline: inherit;
		cursor: pointer;
	}

	.bitcoin-icon {
		font-size: xxx-large;
	}
</style>
