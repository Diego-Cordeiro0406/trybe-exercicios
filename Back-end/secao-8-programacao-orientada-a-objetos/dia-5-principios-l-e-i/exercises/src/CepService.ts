// ./CepService.ts
import FooCepAPI from './FooCepApi';
import IApi from './interfaces/apisInterfaces';

class CepService {
  constructor(private api: IApi) { }

  addressByCep(cep: string, num: number) {
    return this.api.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.api.getCepByAddress(address, num);
  }
}

export default CepService;