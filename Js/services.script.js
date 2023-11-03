// Modal functionality
const openModalButtons = document.querySelectorAll('.plan-button');
const closeModalButtons = document.querySelectorAll('.close');
const modal = document.querySelector('.modal');
const confirmMessage = document.getElementById('confirm-message');
const successMessage = document.getElementById('success-message');
const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');
const okButton = document.querySelector('.ok-button');

openModalButtons.forEach(button => {
  // Code to open modal on button click
  button.addEventListener('click', () => {
    confirmMessage.style.display = 'block';
    successMessage.style.display = 'none';
    modal.style.display = 'flex';
  });
});

closeModalButtons.forEach(button => {
  // Code to handle "X" button click
  button.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

yesButton.addEventListener('click', () => {
  // Code to handle "Yes" button click
  confirmMessage.style.display = 'none';
  successMessage.style.display = 'block';
});

noButton.addEventListener('click', () => {
  // Code to handle "No" button click
  modal.style.display = 'none';
});

okButton.addEventListener('click', () => {
  // Code to handle "Ok" button click
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  // Code to close modal on outside click
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
