import { Router } from 'express';
import pizzaRouter from './pizza.js';
import cartRouter from "./cart.js";

const router = Router();

router.use('/pizza', pizzaRouter);
router.use('/cart', cartRouter);

export default router;
