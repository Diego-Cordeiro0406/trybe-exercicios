import { ILandVehicle } from "./interfaces/IVehicles";

class Car implements ILandVehicle{
  drive(): void { console.log('Drive a normal car'); }
}

export default Car;