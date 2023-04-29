import { Request, Response, NextFunction } from 'express';
import lederboardService from '../services/LeaderboardService';

const getLederboardHome = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const Lederboard = await lederboardService.getLeaderboardHome();

    return res.status(200).json(Lederboard);
  } catch (error) {
    next(error);
  }
};

const getLederboardAway = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const Lederboard = await lederboardService.getLeaderboardAway();

    return res.status(200).json(Lederboard);
  } catch (error) {
    next(error);
  }
};

const leaderboardController = {
  getLederboardHome,
  getLederboardAway,
};

export default leaderboardController;
