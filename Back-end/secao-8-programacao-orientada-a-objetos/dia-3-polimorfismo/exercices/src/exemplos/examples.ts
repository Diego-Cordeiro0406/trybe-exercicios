// abstract class Character {

//     abstract talk(): void
//     abstract specialMove(): void
// }

// class MeleeCharacter extends Character {
//     constructor(private _name: string, private _special: string) {super()}
//     talk(): void {
//       console.log(`Meu nome é ${this._name}, e minha função é falar`);
//     }
//     specialMove(): void {
//       console.log(`Meu nome é ${this._name}, e meu ataque especial é ${this._special}`);  
//     }
//     static callMethods(character: Character) {
//       character.talk()
//       character.specialMove();
//     }
// }

// class LongRangeCharacter extends Character {
//     constructor(private _name: string, private _special: string) {super()}
//     talk(): void {
//       console.log(`Meu nome é ${this._name}, e minha função é falar na porrada`);
//     }
//     specialMove(): void {
//       console.log(`Meu nome é ${this._name}, e meu ataque especial é ${this._special}`);  
//     }
//     static callMethods(character: Character) {
//       character.talk()
//       character.specialMove();
//     }
// }

// const char1 = new MeleeCharacter('Yoshi', 'ataque de curto alcance');
// const char2 = new LongRangeCharacter('Samus', 'ataque de longo alcance');

// MeleeCharacter.callMethods(char1);
// LongRangeCharacter.callMethods(char2);
// char1.specialMove();
// char2.talk();
// char2.specialMove();

// interface Character {
//   name: string;
//   specialMove: string;
// }
  
// interface DbCharacter extends Character {
//   id: number;
// }
  
// const db: DbCharacter[] = [];

// interface IModel {
//   create: (character: Character) => Promise<DbCharacter>;
//   update: (id: number, character: Character) => Promise<DbCharacter>;
//   delete: (id: number) => Promise<boolean>;
//   getAll: () => Promise<DbCharacter[]>;
//   getById: (id: number) => Promise<DbCharacter>;
// }

// class LocalDbModel implements IModel {
//   create = async (character: Character) => {
//     const lastId = db.length > 0 ? db[db.length - 1].id : 0;
//     const newCharacter = { id: lastId + 1, ...character };
//     db.push(newCharacter);
//     return newCharacter;
//   };

//   findIndexById = (id: number) => {
//     const index = db.findIndex((character) => character.id === id);
//     if (index < 0) throw new Error('Character not found');
//     return index;
//   };

//   update = async (id: number, character: Character) => {
//     const indexToUpdate = this.findIndexById(id);
//     db[indexToUpdate] = { ...db[indexToUpdate], ...character };
//     return db[indexToUpdate];
//   };

//   delete = async (id: number) => {
//     const indexToDelete = this.findIndexById(id);
//     const deletedItem = db.splice(indexToDelete, 1);
//     if (deletedItem.length > 0) return true;
//     return false;
//   };

//   getAll = async () => db;

//   getById = async (id: number) => {
//     const indexToGet = this.findIndexById(id);
//     return db[indexToGet];
//   };
// }

// // class CharacterService {
// //   constructor(readonly model: LocalDbModel) { }

// //   async create(character: Character) {
// //     const newCharacter = await this.model.create(character);
// //     return ({ status: 201, data: newCharacter });
// //   }

// //   async getAll() {
// //     const allCharacter = await this.model.getAll();
// //     return ({ status: 200, data: allCharacter });
// //   }

// //   /* Implementação dos outros métodos */
// // }

// class CharacterService {
//   constructor(readonly model: IModel) { }

//   async create(character: Character) {
//     const newCharacter = await this.model.create(character);
//     return ({ status: 201, data: newCharacter });
//   }

//   async getAll() {
//     const allCharacter = await this.model.getAll();
//     return ({ status: 200, data: allCharacter });
//   }

//   /* Implementação dos outros métodos */
// }

// class MockDbModel implements IModel {
//   async create(character: Character) {
//     console.log('character created');
//     return { id: 1, name: 'Peach', specialMove: 'Toad' };
//   }

//   async update(id: number, character: Character) {
//     console.log('character updated');
//     return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
//   }

//   async delete(id: number) {
//     console.log('character deleted');
//     return true;
//   }

//   async getAll() {
//     return [
//       { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
//       { id: 2, name: 'Kirby', specialMove: 'Inhale' },
//     ];
//   }

//   async getById(id: number) {
//     return { id: 1, name: 'Mario', specialMove: 'Fireball' };
//   }
// }

// const A = new CharacterService(new LocalDbModel());
// A.getAll().then(console.log);

// const B = new CharacterService(new MockDbModel());
// B.getAll().then(console.log);