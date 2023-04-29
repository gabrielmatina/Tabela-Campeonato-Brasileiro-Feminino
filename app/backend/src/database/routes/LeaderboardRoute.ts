import * as express from 'express';
import leaderboardController from '../controllers/LeaderBoardController';

const router = express.Router();

router.get('/home', leaderboardController.getLederboardHome);

export default router;
