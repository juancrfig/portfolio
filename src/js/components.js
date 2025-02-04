export const projects = 
{
    "projects": [
        {
            "name": "Jarvis",
            "description": "Asistente de la terminal para Campuslands.",
            "image": "./src/media/jarvis-image.png",
            "language": "Bash",
            "rating": 1,
            "url": "https://github.com/juancrfig/jarvis"
        },
        {
            "name": "Etch-a-Sketch",
            "description": "A web app that lets users draw on a grid using their mouse or keyboard, with options to reset and customize the grid size.",
            "image": "./src/media/etch-a-sketch.png",
            "language": "Javascript",
            "rating": 2,
            "url": "https://github.com/juancrfig/etch-a-sketch"
        },
        {
            "name": "Password Generator",
            "description": "A web app that generates random, secure passwords instantly.",
            "image": "./src/media/pass-generator.png",
            "language": "Javascript",
            "rating": 3,
            "url": "https://github.com/juancrfig/passGenerator"
        },
    ]
}

export const filterComponent = `
<form class="filter flex justify-center gap-2">
<input class="btn btn-square text-2xl" type="reset" value="×"/>
<input class="btn p-5 text-yellow-500 font-bold" type="radio" name="frameworks" aria-label="Javascript"/>
<input class="btn p-5 text-yellow-500 font-bold" type="radio" name="frameworks" aria-label="Python"/>
<input class="btn p-5 text-yellow-500 font-bold" type="radio" name="frameworks" aria-label="Java"/>
<input class="btn p-5 text-yellow-500 font-bold" type="radio" name="frameworks" aria-label="Bash"/>
</form>`
