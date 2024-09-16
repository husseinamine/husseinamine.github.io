<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import logo from '$lib/images/favicon.svg';
    import { Button, Icon, ThemeToggler } from '@sveltestrap/sveltestrap';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="logo" />
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class={$page.url.pathname === '/' ? 'active' : ''}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined} class={$page.url.pathname === '/blog' ? 'active' : ''}>
				<a href="/blog">Blog</a>
			</li>
			<li aria-current={$page.url.pathname === '/nxl' ? 'page' : undefined} class={$page.url.pathname === '/nxl' ? 'active' : ''}>
				<a href="/blog">NotionXL</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<ThemeToggler let:currentColorMode let:toggleColorMode>
			<a on:click|preventDefault={() => toggleColorMode()} href={""}>
				<Icon name={currentColorMode === 'light' ? "moon" : "sun"} />
			</a>
		</ThemeToggler>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		border-radius: 10%;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		color: var(--secondary-color);
	}

	.active {
		color: var(--primary-color);
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 800;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
