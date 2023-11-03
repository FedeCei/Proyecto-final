// Toggle burger and nav menu
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
  // Toggle functionality for nav menu on burger click
  navMenu.classList.toggle('show');
});

// Contact form modal functionality
const form = document.querySelector('form');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const okButton = document.querySelector('.ok-button');

form.addEventListener('submit', (e) => {
  // Code to open modal on submit click
  e.preventDefault();
  modal.style.display = 'flex';
});

function closeModalFunc() {
  // Code to handle "X" button click
  modal.style.display = 'none';
  form.reset();
}

closeModal.addEventListener('click', () => {
  closeModalFunc();
});

okButton.addEventListener('click', () => {
  closeModalFunc();
});
