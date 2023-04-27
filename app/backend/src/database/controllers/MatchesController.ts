import { NextFunction, Request, Response } from 'express';
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
  await MatchesService.matchFinish(+id);
  return res.status(200).json({ message: 'Finished' });
};

const matchesUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;
  const result = await MatchesService.matchesUpdate(+id, homeTeamGoals, awayTeamGoals);
  if (result) {
    return res.status(200).json({ message: 'Matche Updated' });
  }
  return res.status(500).json({ message: 'erro updated' });
};

const newMatch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = req.body;
    const resultMatch = await MatchesService.matchesCreate(result);
    console.log(resultMatch);
    return res.status(201).json(resultMatch);
  } catch (error) {
    next(error);
  }
};

const MatchesController = {
  allMatches,
  matchFinish,
  matchesUpdate,
  newMatch,
};

export default MatchesController;
