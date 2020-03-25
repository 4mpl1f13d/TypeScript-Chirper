//Can use this syntax as well
//import * as express from 'express';
import {Router} from 'express';

//Chirps router
import chirpsRouter from './chirps';

const router = Router();

router.use('/chirps', chirpsRouter);

export default router;