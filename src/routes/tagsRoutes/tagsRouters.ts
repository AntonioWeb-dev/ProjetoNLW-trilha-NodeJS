import { Router } from 'express';

// middlewares

import { ensureAdmin } from '../../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';

import createTagController from '../../controllers/tagsControllers/CreateTagController';
import listTagsController from '../../controllers/tagsControllers/ListTagsController';

const router = Router();

// tags routers

router.route('/tags')
  .get(listTagsController.handle)
  .post(ensureAuthenticated, ensureAdmin,  createTagController.handle);

export default router;
