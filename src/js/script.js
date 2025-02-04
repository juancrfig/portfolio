import {projects, filterComponent} from './components.js'

// Logic for changing the github icon 

const inputTheme = document.querySelector('#input-theme');
const gitImgContainer = document.querySelector('#github-img-container');

inputTheme.addEventListener('click', () => {
	if (inputTheme.checked) {
		gitImgContainer.setAttribute('src', './src/media/icon-git-dark.svg');
	} else {
		gitImgContainer.setAttribute('src', './src/media/icon-github.svg');
	}
})


// LOGIC FOR RENDERING PROJECTS IN SMALL SCREENS

const projectsContainer = document.querySelector('.projects-container');

let isBelowThreshold = null; // Keeps track of the current state

function handleScreenResize() {
    const isNowBelowThreshold = window.innerWidth < 1000;

    // Check if there's a change in state
    if (isNowBelowThreshold && isBelowThreshold !== true) {
        isBelowThreshold = true; // Update state
        renderDivsSmallScreen(); // Render divs for smaller screens
    } else if (!isNowBelowThreshold && isBelowThreshold !== false) {
        isBelowThreshold = false; // Update state
        handleScreenGrow(); // Do something when the screen grows larger
    }
}

function renderDivsSmallScreen() {

	projectsContainer.innerHTML = '';
	projects.projects.slice(0, 3).forEach( (project) => {
		projectsContainer.innerHTML += renderProjectPhone(project);
	})
}

function renderBigScreen() {

	projectsContainer.innerHTML = '';
	projectsContainer.innerHTML += filterComponent;

	const gridContainer = document.createElement('div');
	gridContainer.setAttribute('class', 'grid grid-cols-3 grid-rows-1 gap-4 mt-10');
	projectsContainer.appendChild(gridContainer);


	projects.projects.slice(0, 3).forEach( (project) => {
		gridContainer.innerHTML += renderProjectDesktop(project);
	})
}

function renderProjectDesktop(project) {

	return `
	<div class="w-fit m-auto">  			
			<div class="card bg-base-100 w-64 shadow-xl m-auto mt-10">
				<figure>
				  <img
					src="${project.image}" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-bold">
					${project.name}
					<div class="badge badge-secondary">${project.language}</div>
					</h2>
					<p class="text-xs">${project.description}</p>
					<div class="card-actions justify-end">
						<div class="btn btn-accent"><a href=${project.url} target="_blank">Check Repository</a></div>
					</div>
				</div>
			</div>`
}

function renderProjectPhone(project) {

	return `
	<div class="card bg-base-100 w-64 shadow-xl m-auto mt-10">
		<figure>
		  <img
			src="${project.image}" />
		</figure>
		<div class="card-body">
			<h2 class="card-title font-bold">
			${project.name}
			<div class="badge badge-secondary">${project.language}</div>
			</h2>
			<p class="text-xs">${project.description}</p>
			<div class="card-actions justify-end">
				<div class="btn btn-accent"><a href=${project.url} target="_blank">Check Repository</a></div>
			</div>
		</div>
	</div>
	`
}

function handleScreenGrow() {
	renderBigScreen();
}

// Check initial state
handleScreenResize();

// Add event listener
window.addEventListener('resize', handleScreenResize);
