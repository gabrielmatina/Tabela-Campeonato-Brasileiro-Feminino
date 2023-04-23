import { NextFunction, Request, Response } from 'express';
import Token from '../utils/Token';

const validation = (req: Request, res: Response, next: NextFunction) => {
  const getToken = req.header('authorization');
  const { email } = req.body;
  if (!getToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    Token.tokenGeneration(email);
    return res.status(200).json({ message: 'Funcionou' });
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validation;
