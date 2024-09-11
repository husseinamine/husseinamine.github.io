<script lang="ts">
    import { onMount } from 'svelte';
	import Header from './Header.svelte';
    import { colorMode } from '@sveltestrap/sveltestrap';
	import '../app.css';

	const onColorModeChange = (e: MediaQueryListEvent) => {
		$colorMode = e.matches ? "dark" : "light"
	}

	onMount(() => {
		const matchedMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		$colorMode = matchedMediaQuery.matches ? 'dark' : 'light';
		
		matchedMediaQuery.addEventListener('change', onColorModeChange);

		return () => {
			matchedMediaQuery.removeEventListener('change', onColorModeChange);
		}
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css" />
</svelte:head>

<div class="app container">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>© {new Date().getFullYear()} Hussein Amine</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--secondary-color);
	}
</style>
