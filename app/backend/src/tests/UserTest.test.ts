import * as sinon from 'sinon';
import * as chai from 'chai';
import { adminUser } from './Mock/userMock.test';
import { IUser } from '../database/interfaces/User';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import usersModel from '../database/models/UserModel';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test router User', () => {

  let chaiHttpResponse: Response;

  it('Check login and password fields are filled in.', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/users').send({
        "login": null,
        "password": "123456"
      });

    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "All fields must be filled" });
  });

  it('Check password field is filled in.', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/users').send({
        "login": "teste@teste.com",
        "password": null
      });

    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "All fields must be filled" });
  });

  it('Check login and password field is invalid.', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/users').send({
        "login": "admin@admin.com",
        "password": "123456"
      });

    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });

  it.skip('Check token is returned when loggin.', async () => {
    sinon
      .stub(usersModel, "findOne")
      .resolves(adminUser[0]);
    chaiHttpResponse = await chai
      .request(app).get('/users').send({
        "login": "admin@admin.com",
        "password": "secret_admin"
      });

    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "token": "" });
  });

  it('Check the email is invalid.', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/users').send({
        "login": "@teste.com",
        "password": "123456"
      });

    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });

  it('Check the password field has 6 or more characters.', async () => {
    chaiHttpResponse = await chai
      .request(app).get('/users').send({
        "login": "admin@admin.com",
        "password": "1234"
      });

    expect(chaiHttpResponse.status).to.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });
  
});
