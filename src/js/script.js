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

