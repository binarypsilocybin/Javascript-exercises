import './style.css';
const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];

document.getElementById('app').innerHTML = characters
  .map(
    (character) =>
      `<div class="wrapper-app">
    <div>Name: ${character.name}</div>
    <div>Height: ${character.height}</div>
    <div>Mass: ${character.mass}</div>
    <div>Eye Color: ${character.eye_color}</div>
    <div>Gender: ${character.gender}</div>
  </div>`
  )
  .join('');

// Filter < 100

const massSmaller = characters.filter((item) => item.mass < 100);

document.getElementById('app-filter').innerHTML = massSmaller
  .map(
    (character) =>
      `<div class="wrapper-app">
    <div>Name: ${character.name}</div>
    <div>Height: ${character.height}</div>
    <div>Mass: ${character.mass}</div>
    <div>Eye Color: ${character.eye_color}</div>
    <div>Gender: ${character.gender}</div>
  </div>`
  )
  .join('');

// Total Mass

const totalMass = characters.reduce((acc, obj) => acc + obj.mass, 0);

document.getElementById('app-total').innerHTML = totalMass;

// Total Male

const totalMale = characters.reduce((acc, obj) => {
  if (obj.gender === 'male') {
    acc++;
  }
  return acc;
}, 0);

document.getElementById('app-total-male').innerHTML = totalMale

// Total Eye_color blue

let total = 0;
characters.forEach((item) => {
  if (item.eye_color === 'blue') {
    total++;
  }
});


document.getElementById('app-total-eyecolor').innerHTML = total;
console.log(total);
