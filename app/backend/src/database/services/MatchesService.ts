import Matches from '../models/MatchesModel';
import Teams from '../models/TeamModel';
import { IMatch } from '../interfaces/Matches';

const allMatches = async () => {
  const resultAllMatches = await Matches.findAll({
    include: [
      { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
      { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  return resultAllMatches;
};

const matchFinish = async (id: number) => {
  const result = await Matches.update(
    { inProgress: false },
    { where: { id } },
  );
  // result[0] === 0 ? `Match not found` : `Finished`;
  if (result[0] === 0) {
    return 'Match not found';
  }
  return 'Finished';
};

const matchesUpdate = async (id: number, homeTeamGoals: number, awayTeamGoals: number) => {
  try {
    const result = await Matches.update(
      {
        homeTeamGoals,
        awayTeamGoals,
      },
      { where: { id } },
    );
    return result;
  } catch (error) {
    return null;
  }
};

const matchesCreate = async (date: IMatch) => {
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = date;
  const newMacth = await Matches.create({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true,
  });

  return newMacth;
};

const MatchesService = {
  allMatches,
  matchFinish,
  matchesUpdate,
  matchesCreate,
};

export default MatchesService;
