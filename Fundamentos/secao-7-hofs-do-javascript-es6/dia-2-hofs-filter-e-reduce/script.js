//exemplos com reduce...

// const numbers = [50, 85, -30, 3, 15];

// let maior = numbers.reduce((bigger, number) => bigger > number ? bigger : number);

// console.log(maior)

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const Pares = ((acc, num) => (num % 2 === 0) ? acc + num: acc);

// const somar = (array) => array.reduce(Pares, 0)

// console.log(somar(numbers));

// const estudantes = [
//     {
//       nome: 'Jorge',
//       sobrenome: 'Silva',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 67 },
//         { name: 'Português', nota: 79 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 65 },
//       ],
//     },
//     {
//       nome: 'Mario',
//       sobrenome: 'Ferreira',
//       idade: 15,
//       turno: 'Tarde',
//       materias: [
//         { name: 'Matemática', nota: 59 },
//         { name: 'Português', nota: 80 },
//         { name: 'Química', nota: 78 },
//         { name: 'Biologia', nota: 92 },
//       ],
//     },
//     {
//       nome: 'Jorge',
//       sobrenome: 'Santos',
//       idade: 15,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 76 },
//         { name: 'Português', nota: 90 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 80 },
//       ],
//     },
//     {
//       nome: 'Maria',
//       sobrenome: 'Silveira',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 91 },
//         { name: 'Português', nota: 85 },
//         { name: 'Química', nota: 92 },
//         { name: 'Biologia', nota: 90 },
//       ],
//     },
//     {
//       nome: 'Natalia',
//       sobrenome: 'Castro',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 70 },
//         { name: 'Português', nota: 70 },
//         { name: 'Química', nota: 60 },
//         { name: 'Biologia', nota: 50 },
//       ],
//     },
//     {
//       nome: 'Wilson',
//       sobrenome: 'Martins',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 80 },
//         { name: 'Português', nota: 82 },
//         { name: 'Química', nota: 79 },
//         { name: 'Biologia', nota: 75 },
//       ],
//     },
//   ];

//   const pegarMelhor = (acc, meteria) => (acc.nota > meteria.nota) ? acc : meteria;

//   const relatorio = (estudantes) => estudantes.map((estudante) => ({
//     name: estudante.nome,
//     materia: estudante.materias.reduce(pegarMelhor).name,
//   }))

//   console.log(relatorio(estudantes))