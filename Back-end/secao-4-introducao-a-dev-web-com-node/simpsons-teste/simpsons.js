const fs = require('fs').promises;

const lerJson = async() => {
  // idPerson
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  // simpsons.map(({id, name}) => {
  //   console.log(`${id} - ${name}`)
  // })
//   if(!idPerson) {
//     console.log('isso não é um número, caralho!!')
//   } else if(idPerson < 0 || idPerson > 10) {
//     console.log('nenhum personagem foi encontrado')
//   } else {
//     const result = simpsons.filter(({id}) => Number(id) === idPerson);
//     console.log(result);
//   } 
 const newArray = simpsons.filter(({id}) => Number(id) !== 10 && Number(id) !== 6);;
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray))
}


  lerJson()
