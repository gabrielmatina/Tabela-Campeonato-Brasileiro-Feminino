import * as express from 'express';
import MatchesController from '../controllers/MatchesController';

const router = express.Router();

router.get('/', MatchesController.allMatches);

export default router;
