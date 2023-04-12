import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/User';

const secret = process.env.JWT_SECRET || 'jwt_secret';

const configJwt: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const tokenGeneration = (payload: IUser) => jwt.sign(payload, secret, configJwt);
const tokenVerification = (token: string) => jwt.verify(token, secret);

const Token = { tokenGeneration, tokenVerification };

export default Token;
