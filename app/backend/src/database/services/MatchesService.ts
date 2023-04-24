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
const MatchesService = { allMatches, matchFinish };

export default MatchesService;
