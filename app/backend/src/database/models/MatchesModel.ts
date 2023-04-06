import { BOOLEAN, Model, INTEGER } from 'sequelize';
import db from '.';
import TeamModel from './TeamModel';

class Matches extends Model {
  declare id: number;
  declare matchesName: string;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  homeTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },

  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },

  awayTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },

  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },

  inProgress: {
    type: BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {

  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Matches.belongsTo(TeamModel, { foreignKey: 'homeTeamId' as 'homeTeam' });
Matches.belongsTo(TeamModel, { foreignKey: 'awayTeamId' as 'awayTeam' });

export default Matches;
