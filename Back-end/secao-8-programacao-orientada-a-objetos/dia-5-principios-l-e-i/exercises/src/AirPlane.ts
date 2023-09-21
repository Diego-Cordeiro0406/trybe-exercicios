import { IAirVehicle } from "./interfaces/IVehicles";

class Airplane implements IAirVehicle{
  fly(): void { console.log('Flying a airPlane'); }
}

export default Airplane;