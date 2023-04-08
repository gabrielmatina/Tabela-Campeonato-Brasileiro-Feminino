import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

export default class User extends Model {
  declare id: number;
  declare userName: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  username: {
    type: STRING,
    allowNull: false,
    // field: 'user_name',
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
  tableName: 'users',
  timestamps: false,
});
