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

/* getLeaderboardHome().then((r) => console.log(r));
getLeaderboardAway().then((r) => console.log(r)); */

const sort = (arr: Array<ILeaderboard>) => arr.sort((a, b) => {
  if (b.totalPoints === a.totalPoints) {
    if (b.goalsBalance === a.goalsBalance) {
      return b.goalsFavor - a.goalsFavor;
    } return b.goalsBalance - a.goalsBalance;
  }
  return b.totalPoints - a.totalPoints;
});
const getLeaderboardTotal = async (): Promise<ILeaderboard[]> => {
  const away = await getLeaderboardAway();
  const home = await getLeaderboardHome();
  const result = away.map((team) => {
    const obj = { name: team.name } as ILeaderboard;
    const resultHome = home.find((teamHome) => teamHome.name === team.name) as ILeaderboard;
    obj.totalPoints = +resultHome.totalPoints + +team.totalPoints;
    obj.totalGames = +resultHome.totalGames + +team.totalGames;
    obj.totalVictories = +resultHome.totalVictories + +team.totalVictories;
    obj.totalDraws = +resultHome.totalDraws + +team.totalDraws;
    obj.totalLosses = +resultHome.totalLosses + +team.totalLosses;
    obj.goalsFavor = +resultHome.goalsFavor + +team.goalsFavor;
    obj.goalsOwn = +resultHome.goalsOwn + +team.goalsOwn;
    obj.goalsBalance = +obj.goalsFavor - +obj.goalsOwn;
    obj.efficiency = ((+obj.totalPoints / (+obj.totalGames * 3)) * 100).toFixed(2);
    return obj;
  });
  return sort(result);
};

// getLeaderboardTotal().then((r) => console.log(r));

const leaderboardService = {
  getLeaderboardHome,
  getLeaderboardAway,
  getLeaderboardTotal,
};

export default leaderboardService;
