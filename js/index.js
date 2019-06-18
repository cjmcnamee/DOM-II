// Your code goes here

// Makes bus image say "beep beep!" when you click on it.

const beep = document.querySelector('.container .intro img');

beep.addEventListener('click', (event) => {
  alert('Beep beep!');
});
