import * as bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import { ILogin } from '../interfaces/Login';
import { IUser } from '../interfaces/User';
import Token from '../utils/Token';

const loginValidade = async (user: ILogin) => {
  const loginCheck = await UserModel.findOne({ where: { email: user.email } });
  if (!loginCheck) {
    return { message: 'Invalid email or password' };
  }
  const passwordCheck = await bcrypt.compare(user.password, loginCheck.password);
  if (!passwordCheck) {
    return { message: 'Invalid email or password' };
  }
  const { id, username, role, email } = loginCheck as IUser;
  const token = Token.tokenGeneration({ id, username, role, email });
  return { token };
};

const getRole = async (email: string) => {
  const user = await UserModel.findOne({ where: { email } });
  const role = user?.role;
  return { role };
};

const userService = { loginValidade, getRole };

export default userService;
