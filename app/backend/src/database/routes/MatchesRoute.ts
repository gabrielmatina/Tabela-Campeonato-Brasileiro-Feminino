import * as express from 'express';
import MatchesController from '../controllers/MatchesController';
import tokenValidation from '../middlewares/TokenValidade';

const router = express.Router();

router.get(
  '/',
  MatchesController.allMatches,
);

router.patch(
  '/:id/finish',
  tokenValidation,
  MatchesController.matchFinish,
);

router.patch(
  '/:id',
  tokenValidation,
  MatchesController.matchesUpdate,
);

router.post(
  '/',
  tokenValidation,
  MatchesController.newMatch,
);

export default router;
