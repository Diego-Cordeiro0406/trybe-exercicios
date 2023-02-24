const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function addT(obj, key, value) {
    obj[key] = value
   
  }

  addT(lesson2, 'turno', 'noite');
//   console.log(lesson2)

function listKeys(obj) {
 let keys = Object.keys(obj);
 return keys
}

listKeys(lesson1)

function objLength(obj) {
    let keys = Object.keys(obj).length;
    return keys
   }
   
   objLength(lesson1)

function listValues(obj) {
  let values = Object.values(obj);

  return values
}

listValues(lesson1)

let allLessons = Object.assign({},{lesson1, lesson2, lesson3})

function showStudents(obj) {
  let students = 0;
  const keys = Object.keys(obj);
  for(i in keys) {
    students += obj[keys[i]].numeroEstudantes
  }
  return students
} 

showStudents(allLessons);

function getValueByNumber(obj, indice) {
  let keys = Object.values(obj)[indice];
  return keys
}

getValueByNumber(lesson1, 0);

function verifyPair(obj, key, value) {
  const entries = Object.entries(obj);
  let igual = false;
  for(let i in entries) {
if(entries[i][0] === key && entries[i][1] === value){
  igual = true;
}
  }
  return igual;
}

console.log(verifyPair(lesson1, 'turno', 'manhã'))
