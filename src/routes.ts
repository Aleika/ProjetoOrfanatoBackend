import {Router} from 'express';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

import multer from 'multer';

const routes = Router();
const upload = multer(uploadConfig);

//Métodos comuns no controller: inde, show, create, update, delete

routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);


export default routes;
