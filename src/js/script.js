const typingSpeed = 60; // Typing speed in milliseconds

function typeEffect(element) {

  const text = element.getAttribute("data-text"); // Get the text to type
  let index = 0; // Start typing from the first character
  function type() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(type, typingSpeed);
    }
  }
  type(); // Start the typing effect
}
// Apply the effect to all elements with the class "type-effect"
function applyTypingEffectToAll() {
  const elements = document.querySelectorAll(".type-effect");
  elements.forEach((element) => {
    typeEffect(element);
  });
}
// Trigger the typing effect on window load
window.onload = applyTypingEffectToAll;
