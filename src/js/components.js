export const projects = 
{
    "projects": [
        {
            "name": "Jarvis",
            "description": "Asistente de la terminal para Campuslands.",
            "image": "./src/media/jarvis-icon.png",
            "language": "Bash",
            "rating": 1,
            "url": "https://github.com/juancrfig/jarvis"
        },
        {
            "name": "autoQuery",
            "description": "VS Code Extension that automatically generates JavaScript variables for HTML elements.",
            "image": "./src/media/autoQueryLogo.jpg",
            "language": "Javascript",
            "rating": 2,
            "url": "https://github.com/juancrfig/autoQuery"
        },
	{
	    "name": "Weather App",
	    "description": "Minimalist webpage that uses API requests for showing weather information based on user's input",
	    "image": "./src/media/weatherAppIcon.jpg",
	    "language": "Javascript",
	    "rating": 3,
	    "url": "https://github.com/juancrfig/weatherApp"
	},
        {
            "name": "Etch-a-Sketch",
            "description": "A web app that lets users draw on a grid using their mouse or keyboard, with options to reset and customize the grid size.",
            "image": "./src/media/etch-a-sketch.png",
            "language": "Javascript",
            "rating": 4,
            "url": "https://github.com/juancrfig/etch-a-sketch"
        },
        {
            "name": "Password Generator",
            "description": "A web app that generates random, secure passwords instantly.",
            "image": "./src/media/pass-generator.png",
            "language": "Javascript",
            "rating": 5,
            "url": "https://github.com/juancrfig/passGenerator"
        },
    ]
}

export const filterComponent = `
<form class="filter flex justify-center gap-2">
<input class="btn-filter-reset btn btn-square text-2xl" type="reset" value="×"/>
<input class="btn-filter btn p-5 text-yellow-500 font-bold" type="radio" name="frameworks" aria-label="Javascript"/>
<input class="btn-filter btn p-5 text-yellow-500 font-bold" type="radio" name="frameworks" aria-label="Python"/>
<input class="btn-filter btn p-5 text-yellow-500 font-bold" type="radio" name="frameworks" aria-label="Java"/>
<input class="btn-filter btn p-5 text-yellow-500 font-bold" type="radio" name="frameworks" aria-label="Bash"/>
</form>`



