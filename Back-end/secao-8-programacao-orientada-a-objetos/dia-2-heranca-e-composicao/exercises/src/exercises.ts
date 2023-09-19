class Person {
  constructor(public name: string, private _birthDate: Date) {}

get namePerson() {
  return this.name;
}

get birthDate() {
  return this._birthDate;
}

static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

private set namePerson(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this.name = value;
  }

private set birthDate(date: Date) {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(date) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
    this._birthDate = date;
  }
}


class student extends Person{
    assessmentGrades: number[];
    worktGrades: number[];
    enrollment: string
    
    constructor(
        name: string,
        birthDate: Date,
        ag: number[],
        wg: number[]
        ) {
        super(name, birthDate);
      
      this.assessmentGrades = ag;
      this.worktGrades = wg;
      this.enrollment = this.generateEnrollment();
    }

get studentName() {
  return this.name
}

get studentBirth() {
    return this.birthDate
  }

get studentAssessmentGrades() {
    return this.assessmentGrades
  }

get studentWorkGrades() {
    return this.assessmentGrades
  }

get studentEnrollment() {
    return this.enrollment
  }

private set studentAssessmentGrades(value: number[]) {
    if (value.length < 4) {
      throw new Error('O estudante deve ter no mínimo 4 notas de prova');
    }
    this.assessmentGrades = value;
  }

private set studentWorkGrades(value: number[]) {
    if (value.length < 2) {
      throw new Error('O estudante deve ter no mínimo 2 notas de trabalhos');
    }
    this.assessmentGrades = value;
  }

private set studentEnrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matricula do estudante deve ter no mínimo 16 caracteres');
    }
    this.enrollment = value;
  }

    generateEnrollment() {
      return `STU${String(Date.now() * (Math.random() + 1)).replace(/\W/g, '')}`
    }
    sumGrades() {
      const sumAssessment = this.assessmentGrades.reduce((acc, curr) => acc + curr, 0)
      const sumWork = this.worktGrades.reduce((acc, curr) => acc + curr, 0)
      console.log(`nota total das notas: ${sumAssessment + sumWork}`)
    }
    averageGrades() {
      const sumAssessment = this.assessmentGrades.reduce((acc, curr) => acc + curr, 0)
      const sumWork = this.worktGrades.reduce((acc, curr) => acc + curr, 0)
      const average = ((sumAssessment + sumWork) / 6).toFixed(1);
      console.log(`média das notas: ${average}`)
    }
  }

// const person1 = new student('diego', new Date('2001/06/04'), [10, 10, 10, 10], [1, 1]);

// console.log(person1);



interface Employee {
  registration: string;
  salary: number
  admissionDate: Date;

  generateRegistration(): string;
}

class Subject {
  
  constructor(
    private _name: string,
  ) {}

  get Name() {
    return this._name
  }

  set Name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ter pelo menos 3 caracteres');
    }
    this._name = value
  }
}

// const materia1 = new Subject('Matemática');
// const materia2 = new Subject('História');
// const materia3 = new Subject('Filosofia');

// console.log(materia1)
// console.log(materia2)
// console.log(materia3)

// `Class`: Teacher
// `Extends`: Person
// `Implements`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário
//       e a disciplina
// `Validations`:
//     - O registro deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;  
  constructor(
  _name: string,
  _birthDate: Date,
  public _salary: number,
  subject: Subject,
  ) {
    super(_name, _birthDate)
    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this._registration = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}

const math = new Subject('Matemática');
const historys = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, historys);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);