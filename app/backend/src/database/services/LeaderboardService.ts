import { ILeaderboard } from '../interfaces/Leaderboard';
import model from '../models';
import queryLeaderboard from '../query/queryLeaderbord';

const getLeaderboardHome = async (): Promise<ILeaderboard[]> => {
  const [result] = await model.query(queryLeaderboard.leaderboardHome);
  return result as ILeaderboard[];
};

const getLeaderboardAway = async (): Promise<ILeaderboard[]> => {
  const [result] = await model.query(queryLeaderboard.leaderboardAway);
  return result as ILeaderboard[];
};

const leaderboardService = {
  getLeaderboardHome,
  getLeaderboardAway,
};

export default leaderboardService;
