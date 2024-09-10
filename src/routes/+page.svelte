<script>
	import me from '$lib/images/me.png';
    import { Col, Image, Row } from '@sveltestrap/sveltestrap';  
	import ProjectCard from '../lib/components/ProjectCard.svelte';
	import grocerie from '$lib/images/thumbnails/grocerie.jpg';

	const projects = [
		{
			title: "Grocerie",
			description: "Grocerie is your shopping's co-pilot. Save money by comparing prices. Built with Flutter. Initially started as a tool I needed to check item's prices at multiple stores at once by just scanning the barcode. and using Google's Gemini API we were able to add cutting edge features like basket building by recipe name and image product recognition.",
			imageUrl: grocerie,
			projectUrl: "https://ai.google.dev/competition/projects/grocerie"
		},
	];
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
	{#each projects as project}
		<Col>
			<ProjectCard {...project} />
		</Col>
	{/each}
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
		color: #0095FF;
	}

	a:visited {
		color: #0095FF;
	}
</style>
