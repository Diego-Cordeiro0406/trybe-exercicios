/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const sinon = require('sinon');
// const fs = require('fs');

const app = require('../../src/app');
const connection = require('../../src/db/connection');
const dataDB = require('../../src/db/dataDB');

chai.use(chaiHttp);
const requisition = '/activities';

// eslint-disable-next-line max-lines-per-function
describe('Testando a Api places-non-registered', function () {
  describe('Utilizando o método POST em /activities', function () {
    it('Testando se adiciona uma nova atividade a Api', async function () {
        const output = {
            name: 'Trekking',
            price: 0,
            rating: 5,
            difficulty: 'Fácil',
            createdAt: '10/08/2022',
          };
          
        sinon.stub(connection, 'execute').resolves([output]);
        
        const response = await chai.request(app).post(requisition).send(output);
        const [result] = await dataDB.insert(response.body);
        expect(response.status).to.be.equal(201);
        expect(response.body).to.deep.equal({ message: `Atividade cadastrada com sucesso com o id ${result.insertId}` });
      });
    it('Testando se retorna um log se o campo name não for preenchido correramente', async function () {
      const response = await chai.request(app).post(requisition).send({ name: 'xu' });
      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep.equal({ message: 'O campo name deve ter pelo menos 4 caracteres' });
    });
    it('Testando se retorna um log se o campo price não for preenchido correramente', async function () {
      const response = await chai.request(app).post(requisition).send({ name: 'xuxa', price: 'xa' });
      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep
      .equal({ message: 'O campo price deve ser um número maior ou igual a zero' });
    });
    // it('Testando se retorna um log se o campo description não for preenchido correramente', async function () {
    //   const response = await chai.request(app).post(requisition).send({
    //     name: 'xuxa',
    //     price: 1,
    //     description: {
    //      rating: 5,
    //      difficulty: 'fácil',
    //     },
    //   });
    //   expect(response.status).to.be.equal(400);
    //   expect(response.body).to.deep
    //   .equal({ message: 'Há alguma propriedade faltando' });
    // });
    it('Testando se retorna um log se o campo createAt não for preenchido correramente', async function () {
      const response = await chai.request(app).post(requisition).send({
        name: 'xuxa',
        price: 1,
        rating: 5,
        difficulty: 'fácil',
        createdAt: '19-07-2023',
      });
      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep
      .equal({ message: 'O campo createdAt deve ter o formato dd/mm/aaaa' });
    });
    it('Testando se retorna um log se o campo rating não for preenchido correramente', async function () {
      const response = await chai.request(app).post(requisition).send({
        name: 'xuxa',
        price: 1,
         rating: 'teste',
         difficulty: 'Fácil',
         createdAt: '19/07/2023',
      });
      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep
      .equal({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
    });
    it('Testando se retorna um log se o campo difficulty não for preenchido correramente', async function () {
      const response = await chai.request(app).post(requisition).send({
        name: 'xuxa',
        price: 1,
        rating: 'teste',
        difficulty: 'batata',
        createdAt: '19/07/2023',
      });
      expect(response.status).to.be.equal(400);
      expect(response.body).to.deep
      .equal({ message: 'O campo difficulty deve ser "Fácil", "Médio" ou "Difícil"' });
    });
    });
    afterEach(sinon.restore);
  describe('Utilizando o método DELETE em /activities/:id', function () {
    it('Testando se é possível deletar dados da api', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

      const response = await chai.request(app).delete(`${requisition}/1`);
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ message: 'Atividade com o id 1 removida com sucesso!' });
    });
  });
});