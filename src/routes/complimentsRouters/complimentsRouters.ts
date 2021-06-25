import { Router } from 'express';

// middlewares

import { ensureAdmin } from '../../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';

// controllers

import createComplimentController from '../../controllers/complimentsControllers/CreateComplimentController';
import listUserSendComplimentsController from '../../controllers/complimentsControllers/ListUserSendComplimentsController';
import listUserReceiveComplimentsController from '../../controllers/complimentsControllers/ListUserReceiveComplimentsController';

const router = Router();

// compliments routers

router.post('/compliments', ensureAuthenticated, ensureAdmin , createComplimentController.handle);

router.get('/users/compliments/send', ensureAuthenticated, ensureAdmin ,listUserSendComplimentsController.handle);

router.get('/users/compliments/receive', ensureAuthenticated, ensureAdmin ,listUserReceiveComplimentsController.handle);

export default router;
