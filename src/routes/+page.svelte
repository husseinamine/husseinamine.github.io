<script>
	// import me from '$lib/images/me.png';
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
		<!-- <Col md={6} lg={4}>
			<Image style="border-radius: 3%;" fluid alt="Me" src={me} />
		</Col> -->
		<Col md={12} lg={8}>
			<div>
				<br />	
				<h3>Hi, I'm Hussein</h3>
				<p>
					<i>I build things.</i>
				</p>
				<p>
					I have an interest in engineering, software development and electronics. 
					I have participated in multiple public service / volunteering initiatives with respected organizations like LOYAC and Suffix
					which helped me gain professional, communication & leadership skills. In addition, I've won multiple programming competitions, 
					participated and excelled at different workshops and developed multiple full-stack projects that also involve AI.
				</p>
				<p>
					I'm familiar with technologies like Go, Python, JavaScript, 
					Typescript, React, Svelte, Dart (Flutter), C, C++, Arduino, ESP, and more. 
					I like to work on everything that runs behind the scenes.
				</p>
				<p>NOTE: Most of my Certifications, Honors and Awards can be found on <a href="https://www.linkedin.com/in/husseinamiine/details/honors/">this</a> page of my LinkedIn.</p>
				<p>
					You can reach me at my email <a href="mailto:contact@husseinamine.com">contact@husseinamine.com</a> or through:
				</p>
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
</style>
