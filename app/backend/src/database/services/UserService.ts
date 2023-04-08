import * as bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import { ILogin } from '../interfaces/Login';
import { IUser } from '../interfaces/User';
import { tokenGeneration } from '../utils/Token';

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
  const token = tokenGeneration({ id, username, role, email });
  return { token };
};

const getId = async (id: number) => {
  const time = await UserModel.findByPk(id);
  return time;
};

export { loginValidade, getId };
