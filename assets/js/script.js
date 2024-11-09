const toggleButton = document.getElementById('toggleDarkMode');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

toggleButton.addEventListener('click', toggleDarkMode);