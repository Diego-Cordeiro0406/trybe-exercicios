function techList(newObj, nome) {
let numSort = newObj.sort();
let vetor = []
if(newObj.length == 0) {
    return 'Vazio!'
}
for(let i = 0; i < newObj.length; i += 1) {
  vetor.push({
    tech:newObj[i],
    name:nome
  })
}
return vetor;
}

module.exports = techList;