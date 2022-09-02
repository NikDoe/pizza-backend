import { Router } from 'express';
import pizzaRouter from './pizza.js';

const router = Router();

router.use('/pizza', pizzaRouter);

export default router;
