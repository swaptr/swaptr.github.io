<script lang="ts">
	import * as config from '$lib/config';
	import TextButton from '../components/TextButton.svelte';
	import Modal from '../components/modal.svelte';

	let showModal = false;
</script>

<footer>
	<div class="footer-container">
		<div />
		<div class="text-container">
			<span>{new Date().getFullYear()} &copy;</span>
			<TextButton
				label={config.license}
				onChange={() => {
					showModal = true;
				}}
			/>
			<span>| {config.author}</span>
		</div>
	</div>
</footer>

<Modal bind:showModal>
	<h3 slot="modal-header">License</h3>
	<p>
		MIT License<br /><br />Copyright (c) {new Date().getFullYear()} swaptr<br /><br />Permission is
		hereby granted, free of charge, to any person obtaining a copy of this software and associated
		documentation files (the "Software"), to deal in the Software without restriction, including
		without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
		and/or sell copies of the Software, and to permit persons to whom the Software is furnished to
		do so, subject to the following conditions:<br /><br />The above copyright notice and this
		permission notice shall be included in all copies or substantial portions of the Software.<br
		/><br />THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
		INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
		AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	</p>
</Modal>

<style>
	.text-container {
		display: flex;
		flex-direction: row;
		gap: 5px;
		align-items: center;
	}

	.footer-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	p {
		margin: 0;
		font-size: small;
		text-align: justify;
	}

	footer {
		padding-block: 15px;
	}
</style>
