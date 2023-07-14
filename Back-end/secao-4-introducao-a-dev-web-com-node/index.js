const readline = require('readline-sync');
const name = readline.question("What's your name? ");
const age = readline.questionInt("What's your age? ");
console.log(`Hello World!, ${name}, sua idade é ${age} anos`);