import { NextFunction, Request, Response } from 'express';
import Token from '../utils/Token';

const validation = (req: Request, res: Response, next: NextFunction) => {
  const getToken = req.header('authorization');
  if (!getToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const result = Token.tokenVerification(getToken);
    res.locals.payload = result;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validation;
