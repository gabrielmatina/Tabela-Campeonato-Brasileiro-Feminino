import { Request, Response } from 'express';
import { allTeams, onlyTeam } from '../services/TeamService';

const allTeam = async (_req: Request, res: Response) => {
  const getAllTeams = await allTeams();
  return res.status(200).json(getAllTeams);
};

const oneTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await onlyTeam(Number(id));
  return res.status(200).json(team);
};

export { allTeam, oneTeam };
