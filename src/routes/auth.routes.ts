import express from 'express';
import AuthController from '../controllers/auth.controller';
import { registerValidationRules } from '../validators/auth';
import { validateRequest } from '../common/middlewares/validate-request';

const router = express.Router();

router.post('/register', registerValidationRules, validateRequest, AuthController.register);
router.post('/login', AuthController.login);

export default router;