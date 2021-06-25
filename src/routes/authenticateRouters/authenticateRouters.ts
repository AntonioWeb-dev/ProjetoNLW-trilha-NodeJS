import { Router } from 'express';


// controllers

import authenticateUserController from '../../controllers/authenticateControllers/AuthenticateUserController';

// login router
const router = Router();

router.post('/login', authenticateUserController.handle);

export default router;
