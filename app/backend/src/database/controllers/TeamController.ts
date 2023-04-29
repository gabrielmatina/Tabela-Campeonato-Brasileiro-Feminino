import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

const allTeam = async (_req: Request, res: Response) => {
  const getAllTeams = await TeamService.allTeams();
  return res.status(200).json(getAllTeams);
};

const oneTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await TeamService.onlyTeam(Number(id));
  return res.status(200).json(team);
};

const TeamController = { allTeam, oneTeam };

export default TeamController;
