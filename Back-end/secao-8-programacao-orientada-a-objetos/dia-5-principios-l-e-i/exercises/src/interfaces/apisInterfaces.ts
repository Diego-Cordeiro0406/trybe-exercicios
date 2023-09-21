interface IApi {
  getAddressByCEP(cep: string, number: number): Promise<string>
  getCepByAddress(address: string, number: number): Promise<string>
}

export default IApi;