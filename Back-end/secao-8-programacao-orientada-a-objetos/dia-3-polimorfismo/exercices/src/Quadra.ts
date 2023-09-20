import { IAgenda } from "./interfaces/IAgenda";

// src/Quadra.ts
abstract class Quadra { 
  abstract reservar<T>(value: Date): IAgenda<T>
}

export default Quadra;