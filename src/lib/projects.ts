import grocerie from '$lib/images/thumbnails/grocerie.jpg';
import notionxl from '$lib/images/thumbnails/notionxl.png';

import husseinamine from '$lib/images/thumbnails/husseinamine.svg';

const projects = [
    {
        title: "Grocerie",
        description: "Grocerie is your shopping's co-pilot. Save money by comparing prices. Initially started as an app built with Flutter which I needed to check item's prices at multiple stores at once by just scanning the barcode. Using Google's Gemini API I was able to add cutting edge AI features like basket building by recipe name and image product recognition.",
		image: grocerie,
		projectUrl: 'https://ai.google.dev/competition/projects/grocerie',
	},    
    {
        title: "NotionXL",
        description: "An easy to use extension that allows you to convert a notion table/database you are viewing into CSV format. To use it you, 1. wait for the page containing the table/database to fully load, 2. click on the extension icon in the top right corner, 3. done! if there were any tables in the page it will save them into a csv file (Excel compatible format).",
		image: notionxl,
		projectUrl: '/nxl',
	},
    {
        title: "husseinamine.com",
        description: "Simple and minimalistic yet beautiful, thats all I got to say about what I wanted to achieve with this project. I built this website to showcase my work and to share my thoughts. Built with Sveltekit and Typescript while using Sveltestrap for styling. The project's source code is available on Github and licensed under the MIT license.",
		image: husseinamine,
		projectUrl: 'https://github.com/husseinamine/husseinamine.github.io',
	},
];

export default projects;