// Toggle burger and nav menu
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
  // Toggle functionality for nav menu on burger click
  navMenu.classList.toggle('show');
});

// Search functionality
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input[type="text"]');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    // Code for finding searched term
    const sectionText = section.innerHTML;
    const modifiedText = highlightSearchTerm(sectionText, searchTerm);
    section.innerHTML = modifiedText;
  });

  // Code to find the searched term and scroll to it
  const highlightedElements = document.querySelectorAll('.highlight');
  if (highlightedElements.length > 0) {
    highlightedElements[0].scrollIntoView();
  }
});

function highlightSearchTerm(text, searchTerm) {
  // This code is to avoid replacing the origianl text with the lowercase searched term and adding the highlight class
  const regex = new RegExp(searchTerm, 'gi');
  const highlightedText = `<span class="highlight">$&</span>`;
  const modifiedText = text.replace(regex, highlightedText);
  return modifiedText;
}
