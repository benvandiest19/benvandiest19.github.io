const para = document.querySelector('p'):

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter New Name');
  para.textContent = `Player 1: ${name}`;
}