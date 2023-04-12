import Matches from '../models/MatchesModel';
import Teams from '../models/TeamModel';

const allMatches = async () => {
  const resultAllMatches = await Matches.findAll({
    include: [
      { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
      { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  return resultAllMatches;
};

const MatchesService = { allMatches };

export default MatchesService;
