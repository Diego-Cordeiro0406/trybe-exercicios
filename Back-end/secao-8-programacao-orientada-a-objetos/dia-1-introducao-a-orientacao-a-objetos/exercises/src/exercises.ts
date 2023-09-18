class student {
  nome: string;
  assessmentGrades: number[];
  worktGrades: number[];
  
  constructor(n: string, ag: number[], wg: number[]) {
    this.nome = n;
    this.assessmentGrades = ag;
    this.worktGrades = wg;
  }
  botetim() {
    console.log(`
    aluno: ${this.nome}
    notas das provas: ${this.assessmentGrades}
    notas dos trabalhos: ${this.worktGrades}
    `)
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

const aluno1 = new student('diego', [10, 10, 10, 10], [5, 5]);

// aluno1.botetim();
// aluno1.sumGrades();
// aluno1.averageGrades();

class client {
   private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get nameClient() {
   return this._name;
 }
}

class orderItem {
    private _name: string;
    price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this.price = price;
  }
  get nameOrder() {
    return this._name
  }

  get priceOrder() {
    return this.price;
  }
}

class order {
  private _name: string;
  consumedItens: orderItem[];
  private _payment: 'card' | 'money';
  discount?: number

  constructor(
    name: string,
    consumedItens: orderItem[],
    payment: 'card' | 'money',
    discount: number
  ) {
    this._name = name
    this.consumedItens = consumedItens
    this._payment = payment
    this.discount = discount
  }

  getName() {
    return this._name;
  }

  getConsumedItens() {
    return this.consumedItens;
  }

  getPayment() {
    return this._payment;
  }

  getDiscount() {
    return this.discount;
  }

  sumOrder() {
    return this.consumedItens.reduce((total, atual) => {
      const totalValue = total + atual.price

      return totalValue;
    }, 0)
  }
}

const sandwich = new orderItem('Sanduíche Natural', 5.00);
const juice = new orderItem('Suco de Abacaxi', 5.00);
const dessert = new orderItem('Gelatina de Uva', 2.50);

const order1 = new order('diego', [sandwich, juice, dessert], 'money', 0.10);

console.log(order1);
console.log('Valor normal: ', order1.sumOrder());