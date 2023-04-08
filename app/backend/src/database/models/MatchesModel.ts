import { BOOLEAN, Model, INTEGER } from 'sequelize';
import db from '.';
// import TeamModel from './TeamModel';

export default class Matches extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgess: number;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeamId: {
    type: INTEGER,
    field: 'home_team_id',
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  homeTeamGoals: {
    type: INTEGER,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: INTEGER,
    field: 'awya_team_id',
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  awayTeamGoals: {
    type: INTEGER,
    field: 'away_tem_goals',
  },
  inProgess: {
    type: BOOLEAN,
    field: 'in_progress',
  },

}, {
  sequelize: db,
  underscored: true,
  tableName: 'matches',
  timestamps: false,
});
