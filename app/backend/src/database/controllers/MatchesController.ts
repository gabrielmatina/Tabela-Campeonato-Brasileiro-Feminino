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

const matchFinish = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MatchesService.matchFinish(+id);
  if (result === null) {
    return res.status(200).json({ message: 'Finished' });
  }
  return result;
};

const MatchesController = { allMatches, matchFinish };

export default MatchesController;
