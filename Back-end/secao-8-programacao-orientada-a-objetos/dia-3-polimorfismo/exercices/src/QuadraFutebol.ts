import Quadra from "./Quadra";
import normas from "./normas/normasDeUso";
import { IFutebol } from './interfaces/IFutebol';
import { IAgenda } from './interfaces/IAgenda';

class QuadraFutebol extends Quadra {
  public futData: IFutebol = normas.futebol;
  constructor() {super()}
  reservar<IFutebol>(value: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    const reserva = {
      protocolo,
      data: value,
      regras: this.futData as unknown as IFutebol
    }
    return reserva
  }
}

export default QuadraFutebol;