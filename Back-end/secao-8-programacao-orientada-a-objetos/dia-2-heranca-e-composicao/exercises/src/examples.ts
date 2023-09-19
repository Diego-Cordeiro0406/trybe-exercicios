class Superclass {
  constructor(public isSuper: boolean = true) {}
  public sayHello() {
    console.log('Olá mundo!')
  }
}

class Subclass extends Superclass {
  constructor(public isSuper: boolean = true) {
    super(isSuper = false);
  }
}

const myFunc = (obj: Superclass) => {
//   obj.sayHello();
  if (obj.isSuper === true) {
    console.log('Super!')
  } else {
    console.log('Sub!')
  }
}

const super1 = new Superclass()
const sub1 = new Subclass()

// myFunc(super1);
// myFunc(sub1);

// class Superclass {
//     constructor(public isSuper: boolean = true) {}
//     private sayHello() {
//       console.log('Olá mundo!')
//     }
//   }
  
//   class Subclass extends Superclass {
//     public sayHello2() {
//       this.sayHello();
//     }
//   }
  
//   const myFunc = (obj: Subclass) => {
//     obj.sayHello2();
//   }
  
  
//   const super1 = new Superclass()
//   const sub1 = new Subclass()
  
//   myFunc(super1);
//   myFunc(sub1);

interface MyInterface {
  myNumber: number

  myFunc(myParam: number): string;
}

class myClass implements MyInterface {
  constructor(public myNumber: number = 5) {}
  myFunc(myParam: number): string {
    return `a soma é: ${myParam + this.myNumber}`
  }
}

const newClass = new myClass(4);
// console.log(newClass.myNumber);
// console.log(newClass.myFunc(1))

interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param)
  }
}

class ConsoleLogger2 implements Logger {
    log(param: string): void {
      console.log(`Só pra difereciar ${param}`)
    }
  }

interface Database {
  atributo: Logger;

  save(key:string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public atributo: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
      this.atributo.log(`${key}, ${value}`)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');