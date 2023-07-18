const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app');

chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
    brands: [
      {
        id: 1,
        name: 'Lindt & Sprungli',
      },
      {
        id: 2,
        name: 'Ferrero',
      },
      {
        id: 3,
        name: 'Ghirardelli',
      },
    ],
    chocolates: [
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ],
  });

  describe('Testando a API Cacau Trybe', () => {
        sinon.stub(fs.promises, 'readFile')
        .resolves(mockFile);
    describe('Usando o método GET em /chocolates', () => {
    it('Retorna a lista completa de chocolates!', async () => {
        const output = [
            { id: 1, name: 'Mint Intense', brandId: 1 },
            { id: 2, name: 'White Coconut', brandId: 1 },
            { id: 3, name: 'Mon Chéri', brandId: 2 },
            { id: 4, name: 'Mounds', brandId: 3 },
          ];
        
        const response = await chai.request(app).get('/chocolates');
        expect(response.status).to.be.equals(200);
        expect(response.body.chocolates).to.deep.equal(output);
    });
});
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 4', () => {
  it('Retorna o chocolate Mounds', async () => {
    const response = await chai
      .request(app)
      .get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal(
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
);
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 99', () => {
  it('Retorna status 404 com a mensagem "Chocolate not found"', async () => {
    const response = await chai
      .request(app)
      .get('/chocolates/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
  });
});

describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', () => {
  it('Retorna os chocolates da marca Lindt & Sprungli', async () => {
    const response = await chai
      .request(app)
      .get('/chocolates/brand/1');
    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal([
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
    ]);
  });
});

describe('Usando o método GET em /chocolates/total para buscar o total de chocolates', () => {
  it('Testando o código retorna o valor esperado', async () => {
   const response = await chai.request(app).get('/chocolates/total');

   expect(response.status).to.be.equal(200);
   expect(response.body.totalChocolates).to.deep.equal(4);
  });
});

describe('Usando o método GET em /chocolates/seach?name=Mo para buscar pelo nome', () => {
  it('Testando se o código retorna o valor esperado', async () => {
   const response = await chai.request(app).get('/chocolates/search?name=Mo');

   expect(response.status).to.be.equal(200);
   expect(response.body).to.deep.equal([{
    id: 3,
    name: 'Mon Chéri',
    brandId: 2,
    },
    {
    id: 4,
    name: 'Mounds',
    brandId: 3,
    }]);
  });
});

describe('Usando o método GET em /chocolates/seach?name=xablau', () => {
it('Testando se o código retorna um array vazio ao não encontrar um nome', async () => {
  const response = await chai.request(app).get('/chocolates/search?name=xablau');

  expect(response.status).to.be.equal(404);
  expect(response.body).to.deep.equal([]);
 });
});

describe('Usando o método PUT em /chocolates/:id', () => {
  sinon.stub(fs.promises, 'writeFile')
        .resolves(mockFile);
  it('Testando se o código altera um chocolate na base de dados', async () => {
    const response = await chai.request(app).put('/chocolates/1').send({
      name: 'Mint Pretty Good',
      brandId: 2,
    });
  
    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({
      chocolates: {
            id: 1,
            name: 'Mint Pretty Good',
            brandId: 2,
        },
    });
   });
  });

describe('Usando o método PUT em /chocolates/555', () => {
  it('Testando se o código retorna um array vazio ao não encontrar um chocolate', async () => {
    const response = await chai.request(app).put('/chocolates/555');
    
    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Nenhum chocolate encontrado' });
    });
  });