import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: number;
  declare userName: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  userName: {
    type: STRING,
    allowNull: false,
    field: 'user_name',
  },

  role: {
    type: STRING,
    allowNull: false,
    field: 'role',
  },

  email: {
    type: STRING,
    allowNull: false,
    field: 'email',
  },

  password: {
    type: STRING,
    allowNull: false,
    field: 'password',
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default User;
