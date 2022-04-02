import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { Response } from 'superagent';
import app from '../../src/app'
import { 
  newUser, 
  oldUser,
  loginUser, 
  withOutNameUser, 
  emailEmptyUser, 
  passwordShortUser, 
  loginWithOutEmail,
  loginWithEmptyPassword 
} from '../mocks/usersMocks';

import userModel from '../../src/database/models/userModel';

chai.use(chaiHttp)

const { expect } = chai;

describe('POST/register new user', () => {
  let chaiHttpResponse: Response

  before(async () => {
    sinon.stub(userModel, 'create').resolves(newUser as userModel);
  });

  after(() => {
    (userModel.create as sinon.SinonStub).restore();
  });

  it('should register a new user succesfully', async () => {
    chaiHttpResponse = await chai.request(app).post('/register').send(newUser);

    expect(chaiHttpResponse).to.have.status(201);
    expect(chaiHttpResponse.body.token).to.have.key;
    expect(chaiHttpResponse.body.token).to.be.a('string');
  });

  it('should when try to register an existing user', async () => {
    chaiHttpResponse = await chai.request(app).post('/register').send(oldUser);

    expect(chaiHttpResponse).to.have.status(409);
    expect(chaiHttpResponse.body.message).to.be.a('string');
    expect(chaiHttpResponse.body.message).to.be.equals('User already registered');
  });

  it('should return error message when field is without name', async () => {
    chaiHttpResponse = await chai.request(app).post('/register').send(withOutNameUser);

    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body.error).to.be.a('string');
    expect(chaiHttpResponse.body.error).to.be.equals('Name is required');
  });

  it('should return error message when field email is empty', async () => {
    chaiHttpResponse = await chai.request(app).post('/register').send(emailEmptyUser);

    expect(chaiHttpResponse).to.have.status(422);
    expect(chaiHttpResponse.body.error).to.be.a('string');
    expect(chaiHttpResponse.body.error).to.be.equals('Email is not allowed to be empty');
  });

  it('should return error message when field password is not enough', async () => {
    chaiHttpResponse = await chai.request(app).post('/register').send(passwordShortUser);

    expect(chaiHttpResponse).to.have.status(422);
    expect(chaiHttpResponse.body.error).to.be.a('string');
    expect(chaiHttpResponse.body.error).to.be.equals('Password must be longer than 9 characters');
  });
});

describe('POST/login user', () => {
  let chaiHttpResponse: Response

  before(async () => {
    sinon.stub(userModel, 'findOne').resolves(loginUser as any);
  });

  after(() => {
    (userModel.findOne as sinon.SinonStub).restore();
  });

  it('should login succesfully', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(loginUser);

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body.token).to.have.key;
    expect(chaiHttpResponse.body.token).to.be.a('string');
  });

  it('should login succesfully', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(loginWithOutEmail);

    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body.error).to.be.a('string');
    expect(chaiHttpResponse.body.error).to.be.equals('Email is required')
  });

  it('should login succesfully', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(loginWithEmptyPassword);

    expect(chaiHttpResponse).to.have.status(422);
    expect(chaiHttpResponse.body.error).to.be.a('string');
    expect(chaiHttpResponse.body.error).to.be.equals('Password is not allowed to be empty')
  });
});
