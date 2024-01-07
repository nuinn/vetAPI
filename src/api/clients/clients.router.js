import Router from 'express';
import * as clientsController from './clients.controller.js';
import isAdmin from '../../middlewares/isAdmin.js';

const router = Router();

// getAll
router.get('/all', isAdmin, clientsController.getAll);

// getDbSize
router.get('/dbSize', clientsController.getDbSize);

// getByDocumentNumber
router.get('/document/:number', clientsController.getByDocumentNumber);

// getById
router.get('/byId/:id', clientsController.getById);

// getByFilter
router.get('/byFilter', clientsController.getByFilter);

// post
router.post('/', clientsController.post);

// put
router.put('/:id', clientsController.put);

// patch
router.patch('/:id', clientsController.edit);

// delete
router.delete('/:id', clientsController.remove);

export default router;
