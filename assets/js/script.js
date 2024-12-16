const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop > windowHeight * 0.2) {
        navbar.classList.add('minimized');
    } else {
        navbar.classList.remove('minimized');
    }
})