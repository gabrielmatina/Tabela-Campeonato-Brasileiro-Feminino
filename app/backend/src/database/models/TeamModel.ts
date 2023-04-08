import { STRING, Model } from 'sequelize';
import db from '.';

export default class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init({
  teamName: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
});
