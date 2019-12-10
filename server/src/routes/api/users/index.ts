import * as express from 'express';
import * as controllers from './controllers';
import * as validators from './validators';
import { badRequestHandler } from '../../../utils/errorHandler';

const router = express.Router();

router.get('/tickets', controllers.getUserTicket);
router.post('/:userId', controllers.getUser);
router.post(
  '/',
  validators.createUser,
  badRequestHandler,
  controllers.createUser,
);

export default router;
