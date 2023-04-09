import { NextFunction, Request, Response } from 'express';
import { tokenVerification } from '../utils/Token';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const getToken = req.headers.authorization;
  if (!getToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const token = tokenVerification(getToken);
    req.body.user = token;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default tokenValidation;