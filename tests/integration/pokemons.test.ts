import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../src/app'
import { allPokemons, paginatedPokemon, pokemonName, pokemonType } from '../mocks/pokemonsMocks'; 

import PokemonModel from '../../src/database/models/pokemonModel';
import { loginUser } from '../mocks/usersMocks';

chai.use(chaiHttp)

const { expect } = chai;

describe('GET /pokemons', () => {
  let chaiHttpResponse: Response

  before(async () => {
    sinon.stub(PokemonModel, 'findAll').resolves(allPokemons as PokemonModel[]);
  });

  after(() => {
    (PokemonModel.findAll as sinon.SinonStub).restore();
  });

  it('should return an error when not passed a token', async () => {
    chaiHttpResponse = await chai.request(app).get('/pokemons')
   
    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body.message).to.be.a('string');
    expect(chaiHttpResponse.body.message).to.be.equals('Token not found');
  });

  it('should return all pokemons when not especify page and limit', async () => {
    const response = await chai.request(app).post('/login').send(loginUser);
    const { token } = response.body;
    
    chaiHttpResponse = await chai.request(app).get('/pokemons')
    .set('Authorization', token);

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.an('array');
    expect(chaiHttpResponse.body).to.be.deep.equals(allPokemons);
  });
});

describe('GET /pokemons/name/search', () => {
  let chaiHttpResponse: Response

  before(async () => {
    sinon.stub(PokemonModel, 'findOne').resolves(pokemonName as PokemonModel);
  });

  after(() => {
    (PokemonModel.findOne as sinon.SinonStub).restore();
  });

  it('should return an error when not passed a token', async () => {
    chaiHttpResponse = await chai.request(app).get('/pokemons')
   
    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body.message).to.be.a('string');
    expect(chaiHttpResponse.body.message).to.be.equals('Token not found');
  });

  it('should return a specific pokemon by name', async () => {
    const response = await chai.request(app).post('/login').send(loginUser);
    const { token } = response.body;

    chaiHttpResponse = await chai.request(app).get('/pokemons/name/pikachu')
    .set('Authorization', token);

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.an('object');
    expect(chaiHttpResponse.body).to.be.deep.equals(pokemonName);
  });
});

describe('GET /pokemons/type/search', () => {
  let chaiHttpResponse: Response

  before(async () => {
    sinon.stub(PokemonModel, 'findAll').resolves(pokemonType as PokemonModel[]);
  });

  after(() => {
    (PokemonModel.findAll as sinon.SinonStub).restore();
  });

  it('should return an error when not passed a token', async () => {
    chaiHttpResponse = await chai.request(app).get('/pokemons/type/grass')
   
    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body.message).to.be.a('string');
    expect(chaiHttpResponse.body.message).to.be.equals('Token not found');
  });

  it('should return a specific pokemon by type', async () => {
    const response = await chai.request(app).post('/login').send(loginUser);
    const { token } = response.body;

    chaiHttpResponse = await chai.request(app).get('/pokemons/type/grass')
    .set('Authorization', token);

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.an('array');
    expect(chaiHttpResponse.body).to.be.deep.equals(pokemonType);
  });
});

describe('GET /pokemons/paginated', () => {
  let chaiHttpResponse: Response

  before(async () => {
    sinon.stub(PokemonModel, 'findAll').resolves(paginatedPokemon as PokemonModel[]);
  });

  after(() => {
    (PokemonModel.findAll as sinon.SinonStub).restore();
  });

  it('should return an error when not passed a token', async () => {
    chaiHttpResponse = await chai.request(app).get('/pokemons?page=3&limit=5')
   
    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body.message).to.be.a('string');
    expect(chaiHttpResponse.body.message).to.be.equals('Token not found');
  });

  it.skip('should return a paginated pokemons', async () => {
    const response = await chai.request(app).post('/login').send(loginUser);
    const { token } = response.body;

    chaiHttpResponse = await chai.request(app).get('/pokemons?page=3&limit=5')
    .set('Authorization', token);

    console.log(chaiHttpResponse.body);
    
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.an('array');
    expect(chaiHttpResponse.body).to.be.deep.equals(paginatedPokemon);
  });
});