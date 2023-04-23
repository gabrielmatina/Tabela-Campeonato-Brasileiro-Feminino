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

const role = async (req: Request, res: Response) => {
  const data = req.body;
  const onlyRole = await userService.getRole(data.email);
  return res.status(200).json({ onlyRole });
};

export { login, role };
