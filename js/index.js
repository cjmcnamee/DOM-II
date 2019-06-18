// Your code goes here

// Makes bus image say "beep beep!" when you click on it.

const beep = document.querySelector('.container .intro img');

beep.addEventListener('click', (event) => {
  alert('Beep beep!');
});

// Makes boat image say "boat boat!" when you double click it

const boat = document.querySelector('.content-destination img')

boat.addEventListener('dblclick', (event) => {
  alert('boat boat!');
})

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
    event.target.style.backgroundColor = 'pink';
})
seizure.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor = 'white';
})


// Makes it so you can zoom the bus image in and out after clicking on it

let scale = 1;
beep.onwheel = zoom;

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY *-0.01
  scale = Math.min(Math.max(.125, scale), 4);
  beep.style.transform = `scale(${scale})`;
}

// Alerts when page has fully loaded

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
})
