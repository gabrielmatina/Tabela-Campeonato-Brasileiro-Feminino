import NotFoundError from '../../Errors/NotFoundError';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamModel';
import { IMatch } from '../interfaces/Matches';
import TeamService from './TeamService';
import UnprocessableError from '../../Errors/UnprocessableError';

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
  await Matches.update(
    { inProgress: false },
    { where: { id } },
  );
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
  const homeTeam = await TeamService.onlyTeam(homeTeamId);
  const awayTeam = await TeamService.onlyTeam(awayTeamId);
  if (!homeTeam || !awayTeam) {
    throw new NotFoundError('There is no team with such id!');
  }
  if (homeTeamId === awayTeamId) {
    throw new UnprocessableError();
  }
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
