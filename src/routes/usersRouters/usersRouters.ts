import { Router } from 'express';

import createUserController from '../../controllers/usersControllers/CreateUserController';
import listUsersController from '../../controllers/usersControllers/ListUsersController';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';

const router = Router();

// users routes

router.route('/users')
  .get(ensureAuthenticated, listUsersController.handle)
  .post(createUserController.handle);

export default router;
