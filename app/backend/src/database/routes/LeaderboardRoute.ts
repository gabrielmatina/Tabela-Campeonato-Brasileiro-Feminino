import * as express from 'express';
import leaderboardController from '../controllers/LeaderBoardController';

const router = express.Router();

router.get(
  '/home',
  leaderboardController.getLederboardHome,
);

router.get(
  '/away',
  leaderboardController.getLederboardAway,
);

router.get(
  '/',
  leaderboardController.getLederboardTotal,
);

export default router;
