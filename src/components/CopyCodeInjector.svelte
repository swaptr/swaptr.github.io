<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let copiedText = false;
	let copyTimeout = 200;

	onMount(() => {
		let pres: HTMLCollection = document.getElementsByTagName('pre');
		for (let _ of pres) {
			const pre = _ as HTMLPreElement;
			const text = pre.innerText;
			let copyButton = document.createElement('button');
			copyButton.addEventListener(
				'click',
				() => (
					navigator.clipboard.writeText(text),
					(copiedText = true),
					copyTimeout && clearTimeout(copyTimeout),
					(copyTimeout = setTimeout(() => (copiedText = false), 1500))
				)
			);
			pre.style.position = 'relative';
			copyButton.style.backgroundColor = '#1f1f1f';
			copyButton.style.color = '#f1f1f1';
			copyButton.style.fontSize = '12px';
			copyButton.style.margin = '0px 5px 5px 0px';
			copyButton.style.borderStyle = 'none';
			copyButton.style.borderRadius = '3px';
			copyButton.style.padding = '3px 8px';
			copyButton.style.position = 'absolute';
			copyButton.style.bottom = '0px';
			copyButton.style.right = '0px';
			copyButton.style.cursor = 'pointer';
			copyButton.className = 'copy';
			copyButton.innerText = 'copy';
			pre.appendChild(copyButton);
		}
	});
</script>

{#if copiedText}
	<div in:fly={{ y: -100 }} out:fly={{ y: -100 }} class="copy-tooltip">copied to clipboard</div>
{/if}

<slot />

<style>
	.copy-tooltip {
		background-color: rgba(0, 0, 0, 0.8);
		color: var(--body);
		position: fixed;
		padding: 0.4em 0.7em;
		border-radius: 0.4em;
		left: 50%;
		transform: translate(-50%, 0);
		top: 10px;
		z-index: 1;
		box-shadow: 0px 2px 10px -2px var(--code-copy);
	}
</style>
