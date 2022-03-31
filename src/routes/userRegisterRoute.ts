import { Router } from 'express';

import usersController from '../controllers/usersController';

const router = Router();

const userController = new usersController();

router.post('/', userController.registerUser);

export default router;