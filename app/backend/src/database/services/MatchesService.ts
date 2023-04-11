import Matches from '../models/MatchesModel';
import Teams from '../models/TeamModel';

const allMatches = async () => {
  const resultAllMatches = await Matches.findAll({
    include: [
      { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
    ],
  });
  return resultAllMatches;
};

const onlyMatch = async () => {
  const test = console.log('Test');
  return test;
};

export {
  allMatches,
  onlyMatch,
};
