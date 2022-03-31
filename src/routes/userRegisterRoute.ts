import { Router } from 'express';

import usersController from '../controllers/usersController';

import registerValidate from '../middlewares/registerValidation';

const router = Router();

const userController = new usersController();

router.post('/', registerValidate, userController.registerUser);

export default router;