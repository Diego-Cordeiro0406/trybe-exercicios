import { ILandVehicle, IAirVehicle } from './interfaces/IVehicles';

export default class FuturisticCar implements IAirVehicle, ILandVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}