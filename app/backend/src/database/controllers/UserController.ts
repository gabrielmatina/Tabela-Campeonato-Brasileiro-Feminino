import { Request, Response } from 'express';
import { ILogin } from '../interfaces/Login';
import { loginValidade } from '../services/UserService';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const getEmailPassword: ILogin = { email, password };
  const validation = await loginValidade(getEmailPassword);
  if (validation?.message === 'Invalid email or password') {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  return res.status(200).json(validation);
};

const role = async (req: Request, res: Response) => {
  const data = req.body;
  return res.status(200).json({ role: data.user.role });
};

export { login, role };
