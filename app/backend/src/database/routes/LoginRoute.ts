import * as express from 'express';
import FieldsValidate from '../middlewares/LoginValidate';
import { login, userRole } from '../controllers/UserController';
import validaToken from '../middlewares/TokenValidade';

const router = express.Router();

router.post('/', FieldsValidate, login);
router.get('/role', validaToken, userRole);

export default router;
