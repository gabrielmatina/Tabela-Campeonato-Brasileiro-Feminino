import { ILeaderboard } from '../interfaces/Leaderboard';
import model from '../models';
import leaderboardHome from '../query/queryLeaderbordHome';

const getLeaderboardHome = async (): Promise<ILeaderboard[]> => {
  const [result] = await model.query(leaderboardHome);
  return result as ILeaderboard[];
};

const leaderboardService = { getLeaderboardHome };
export default leaderboardService;
