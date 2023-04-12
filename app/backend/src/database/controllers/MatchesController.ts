import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

const allMatches = async (req: Request, res: Response) => {
  const getAllMatches = await MatchesService.allMatches();
  let result = getAllMatches;
  const { inProgress } = req.query;
  if (inProgress === 'true') {
    result = getAllMatches
      .filter((match) => match.inProgress);
  }
  if (inProgress === 'false') {
    result = getAllMatches
      .filter((match) => !match.inProgress);
  }
  return res.status(200).json(result);
};

const MatchesController = { allMatches };

export default MatchesController;
