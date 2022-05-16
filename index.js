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

const massSmaller = characters.filter((item) => item.mass < 100);
console.log(massSmaller);

const totalMass = characters.reduce((acc, obj) => acc + obj.mass, 0);
console.log(totalMass);

const totalMale = characters.reduce((acc, obj) => {
  if (obj.gender === 'male') {
    acc++;
  }
  return acc;
}, 0);
console.log(totalMale);

let total = 0;
characters.forEach((item) => {
  if (item.eye_color === 'blue') {
    total++;
  }
});

console.log(total);
