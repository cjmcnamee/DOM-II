// Your code goes here

// Makes bus image say "beep beep!" when you click on it.

const beep = document.querySelector('.container .intro img');

beep.addEventListener('click', (event) => {
  alert('Beep beep!');
});

// Makes "Fun Bus" text yellow when you hover over it, and back to normal when you hover off of it

const funBus = document.querySelector('.logo-heading');

funBus.addEventListener('mouseover', (event) => {
  event.stopPropagation();
  event.target.style.color = 'gold';
})
funBus.addEventListener('mouseout', (event) => {
  event.stopPropagation();
  event.target.style.color = 'black';
})

// Makes the background color change to gray and back to white when you press a key

const seizure = document.querySelector('body');

seizure.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = 'slategrey';
})
seizure.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor = 'white';
})

// 
