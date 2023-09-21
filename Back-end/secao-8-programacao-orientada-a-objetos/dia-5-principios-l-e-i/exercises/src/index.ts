// ./index.ts
import Airplane from './AirPlane';
import Car from './Car';
import CepService from './CepService';
import FooCepAPI from './FooCepApi';
import FuturisticCar from './FuturisticCar';

async function main() {
  const api1 = new FooCepAPI();
  const cepSvc = new CepService(api1);

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

// main();

const landVehicle = new Car();
const futuristcVehicle = new FuturisticCar();
const airVehicle = new Airplane();

landVehicle.drive();
futuristcVehicle.drive();
futuristcVehicle.fly();
airVehicle.fly();