import { BOOLEAN, Model, INTEGER } from 'sequelize';
import db from '.';
import TeamModel from './TeamModel';

export default class Matches extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
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
    field: 'away_team_id',
    references: {
      model: 'teams',
      key: 'id',
    },
  },

  awayTeamGoals: {
    type: INTEGER,
    field: 'away_team_goals',
  },

  inProgress: {
    type: BOOLEAN,
    field: 'in_progress',
  },

}, {
  sequelize: db,
  underscored: true,
  tableName: 'matches',
  timestamps: false,
});

Matches.belongsTo(TeamModel, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(TeamModel, { foreignKey: 'awayTeamId', as: 'awayTeam' });
