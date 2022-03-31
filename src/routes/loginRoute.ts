import { Router } from 'express';

import usersController from '../controllers/usersController';

import loginAuth from '../middlewares/loginAuth';

const router = Router();

const userController = new usersController();

router.post('/', loginAuth, userController.loginUser);

export default router;