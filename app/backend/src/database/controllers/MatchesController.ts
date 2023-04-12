import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

const allMatches = async (_req: Request, res: Response) => {
  const getAllMatches = await MatchesService.allMatches();
  return res.status(200).json(getAllMatches);
};

const MatchesController = { allMatches };

export default MatchesController;
