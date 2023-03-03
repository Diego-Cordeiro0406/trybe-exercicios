//FOREACH EXAMPLES...

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   emailListInData.forEach((item) => {
//     console.log(`O email ${item} está cadastrado em nosso banco de dados!`)
//   })

// FIND EXAMPLES...

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const fNumbers = numbers.find((divisivel) => divisivel % 3 === 0 && divisivel % 5 === 0)
// console.log(fNumbers)

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ];
  
// const vMusic = musicas.find((mid) => mid.id === '31031685')

// console.log(vMusic)

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNames = names.find((nomes) => nomes.length === 5)

// console.log(findNames)

// SOME AND EVERY EXAMPLES...

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//  return arr.some((nome) => nome === name)
// }; 

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//     const verifyAges = (array, idadeMin) => array.every((pessoa) => pessoa.age >= idadeMin)
  
//   console.log(verifyAges(people, 18));
//   console.log(verifyAges(people, 14));

// SORT EXAMPLES...

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// people.sort((a, b) => b.age > a.age ? 1 : -1)

// console.log(people);

//exercício 1...

const personMail = (nome) =>{
    const email = nome.toLowerCase().replace(' ', '_')
   return {nome, email:`${email}@trybe.com`}
} 

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

//exercício 2...

const numCheck = (meuNum, num) => meuNum === num;

const sorteio = (meuNum, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(meuNum, number) ? 'parabéns, você ganhou' : 'tente novamente'
};

