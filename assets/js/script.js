const navbar = document.querySelector('nav');
const workingElement = document.querySelector('.card a')
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

document.addEventListener('DOMContentLoaded', () => {
    const underlineContainers = document.querySelectorAll('.underline-container');
    
    underlineContainers.forEach((container) => {
        const span = container.querySelector('span');
        const underline = container.querySelector('.underline-effect');
        
        setTimeout(() => {
            // Measure the width of the span to create a precise underline
            const spanWidth = span.offsetWidth;
            underline.style.width = `${spanWidth}px`;
        }, 500); // Stagger the animations

        setTimeout(() => {
            workingElement.classList.add('color-butterscotch')
        }, 1000)
    });
});



