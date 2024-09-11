<script>
	import me from '$lib/images/me.png';
    import { Col, Image, Row } from '@sveltestrap/sveltestrap';  
	import ProjectCard from '../lib/components/ProjectCard.svelte';
	import projects from '../lib/projects';
</script>

<svelte:head>
	<title>Hussein Amine</title>
	<meta name="description" content="Hello, my name is hussein and I build things." />
</svelte:head>

<section>
	<Row>
		<Col md={6} lg={4}>
			<Image style="border-radius: 3%;" fluid alt="Me" src={me} />
		</Col>
		<Col md={6} lg={8}>
			<div>
				<br />	
				<h3>Hi, I'm Hussein</h3>
				<p>
					I build things. 
					I'm familiar with technologies like Go, Python, JavaScript, 
					Typescript, React, Svelte, Dart (Flutter), C, C++, Arduino, ESP, and more. 
					I like to work on everything that runs behind the scenes.
				</p>
	
				You can reach me at my email <a href="mailto:contact@husseinamine.com">contact@husseinamine.com</a> or through:
				<ul>
					<li><a href="https://linkedin.com/in/husseinamiine">LinkedIn</a></li>
					<li><a href="https://x.com/husseinamiine">X / Twitter</a></li>
					<li><a href="https://github.com/husseinamine">Github</a></li>
				</ul>
				although email is always the best option.
			</div>
		</Col>
	</Row>
	<br />
	<h1>Projects</h1>
	<Row>
		{#each projects as project}
			<Col lg={6} md={12} sm={12}>
				<ProjectCard {...project} />
			</Col>
		{/each}
	</Row>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		flex: 0.6;
	}

	a {
		text-decoration: none;
		font-weight: 700;
		color: var(--primary-color);
	}

	a:visited {
		color: var(--primary-color);
	}
</style>
