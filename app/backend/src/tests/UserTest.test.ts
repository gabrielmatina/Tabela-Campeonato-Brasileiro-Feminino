import * as sinon from 'sinon';
import * as chai from 'chai';
import { user } from './Mock/userMock.test';
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
  beforeEach(sinon.restore)

  it('Check login and password fields are filled in.', async () => {
    chaiHttpResponse = await chai
      .request(app).post('/login').send({
        "email": "admin123@admin.com",
        "password": "secret_admin"
      });

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });

  it('Check login and password fields are filled in.', async () => {
    chaiHttpResponse = await chai
      .request(app).post('/login').send({
        "email": "admin@admin.com",
        "password": "incorrect"
      });

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });

  it('Check login and password fields are filled in.', async () => {
    chaiHttpResponse = await chai
      .request(app).post('/login').send({
        "email": null,
        "password": null,
      });

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "All fields must be filled" });
  });

  it('Check login and password field is invalid.', async () => {
    chaiHttpResponse = await chai
      .request(app).post('/login').send({
        "email": "admin@admin.com",
        "password": "123"
      });

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "Invalid email or password" });
  });

  it('Check token is returned when login.', async () => {

    chaiHttpResponse = await chai
      .request(app).post('/login').send({
        "email": "admin@admin.com",
        "password": "secret_admin"
      });

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

});
