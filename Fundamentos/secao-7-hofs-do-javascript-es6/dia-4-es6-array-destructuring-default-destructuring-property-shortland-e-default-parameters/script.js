// Array destructuring examples...

const primeNumbers = [17, 23, 37]
const [primeiro, segundo, terceiro] = primeNumbers
const sum = (a, b) => {
//   console.log(a + b);
}

sum(primeiro, terceiro) // 54

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal]

// console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares
// console.log(numerosPares);

// Default destructuring examples...

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson));
// console.log(getNationality(person));

// object property shortland...

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
  });
  
//   console.log(getPosition(-19.8157, -43.9542));

// Default parameters examples...

const greeting = (user = 'parça') => console.log(`Welcome ${user}!`);

// greeting();

const multiply = (number, value = 1) => number * value;
  
//   console.log(multiply(8));

// exercício 1...

// const myList = [5, 2, 3];

// const swap = ([a, b, c]) => [c, b, a]

const myList = [5, 2, 3];

const swap = ([a, b, c]) => [c, b, a];

// console.log(swap(myList))

// exercício 2...

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([nome, marca, ano]) => ({nome, marca, ano,})

// console.log(toObject(palio));

// exercício 3...

const greet = (nome, cumprimento = 'Hi') => `${cumprimento} ${nome}`

// console.log(greet('John')); 
// console.log(greet('John', 'Good morning'));
// console.log(greet('Isabela', 'Oi'));

// exercício 4...

const studenti1 = {
    name: `Claudia`,
    lastName: `Farias`,
    age: 23,
  }
  
  const studenti2 = {
    name: `Vitor`,
    age: 20,
  }
  
  // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
  const getLastName = ({name, lastName = 'lastname não preenchido', age}) => ({name, lastName, age,})
//   console.log(getLastName(student1));
//   console.log(getLastName(student2));

// exercício 5...

const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Escreva seu código aqui
  const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);