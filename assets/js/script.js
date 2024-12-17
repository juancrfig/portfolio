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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.7 // Triggers when 10% of the element is visible
  });
  
  // Select all elements you want to animate
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

// ----------------------------------------------------------
// QUOTE GENERATOR 
// ----------------------------------------------------------

const quotes = [
    {
    "quote": "If I have seen further than others it is by standing upon the shoulders of giants",
    "author": "Isaac Newton" 
    },
    {"quote": "Without training, they lacked knowledge. Without knowledge, they lacked confidence. Without confidence, they lacked victory",
    "author": "Julius Caesar"
    },
]

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const randomNumber = Math.floor(Math.random() * quotes.length)

quoteElement.textContent = quotes[randomNumber].quote;
authorElement.textContent = quotes[randomNumber].author;

// ----------------------------------------
// DROPDOWN MENU
// ----------------------------------------
