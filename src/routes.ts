import { Router } from 'express';

// middlewares

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

// controllers

import createUserController from './controllers/CreateUserController';
import listUsersController from './controllers/ListUsersController';

import createTagController from './controllers/CreateTagController';
import listTagsController from './controllers/ListTagsController';

import authenticateUserController from './controllers/AuthenticateUserController';

import createComplimentController from './controllers/CreateComplimentController';
import listUserSendComplimentsController from './controllers/ListUserSendComplimentsController';
import listUserReceiveComplimentsController from './controllers/ListUserReceiveComplimentsController'


const router = Router();

// users routes

router.route('/users')
  .get(ensureAuthenticated, listUsersController.handle)
  .post(createUserController.handle);

// tags routers

router.route('/tags')
  .get(listTagsController.handle)
  .post(ensureAuthenticated, ensureAdmin,  createTagController.handle);

// compliments routers

router.post('/compliments', ensureAuthenticated, ensureAdmin , createComplimentController.handle);

router.get('/users/compliments/send', ensureAuthenticated, ensureAdmin ,listUserSendComplimentsController.handle);

router.get('/users/compliments/receive', ensureAuthenticated, ensureAdmin ,listUserReceiveComplimentsController.handle);

// login router

router.post('/login', authenticateUserController.handle);


  export { router };
