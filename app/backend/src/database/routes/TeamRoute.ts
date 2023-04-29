import * as express from 'express';
import TeamController from '../controllers/TeamController';

const router = express.Router();

router.get(
  '/',
  TeamController.allTeam,
);

router.get(
  '/:id',
  TeamController.oneTeam,
);

export default router;
