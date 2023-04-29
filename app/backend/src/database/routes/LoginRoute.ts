import * as express from 'express';
import FieldsValidate from '../middlewares/LoginValidate';
import UserController from '../controllers/UserController';
import validaToken from '../middlewares/TokenValidade';

const router = express.Router();

router.post(
  '/',
  FieldsValidate,
  UserController.login,
);

router.get(
  '/role',
  validaToken,
  UserController.userRole,
);

export default router;
