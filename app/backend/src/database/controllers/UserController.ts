import { Request, Response } from 'express';
import { ILogin } from '../interfaces/Login';
import userService from '../services/UserService';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const getEmailPassword: ILogin = { email, password };
  const validation = await userService.loginValidade(getEmailPassword);
  if (validation?.message === 'Invalid email or password') {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  return res.status(200).json(validation);
};

const userRole = async (req: Request, res: Response) => {
  const data = res.locals;
  const { role } = data.payload;
  console.log(role);
  return res.status(200).json({ role });
};

export { login, userRole };
