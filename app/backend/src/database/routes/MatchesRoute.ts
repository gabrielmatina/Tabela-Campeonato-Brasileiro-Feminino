import * as express from 'express';
import MatchesController from '../controllers/MatchesController';
import Token from '../utils/Token';
import tokenValidation from '../middlewares/TokenValidade';

const router = express.Router();

router.get('/', MatchesController.allMatches);
router.patch(
  '/:id/finish',
  Token.tokenVerification,
  tokenValidation,
  MatchesController.matchFinish,
);

export default router;
