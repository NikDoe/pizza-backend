import { Router } from 'express';
import CartController from '../controllers/CartController.js';

const cartRouter = Router();

cartRouter.post('/', CartController.addPizzaToCart);
cartRouter.get('/', CartController.getCart);
cartRouter.patch('/', CartController.updatePizzaInCart);

export default cartRouter;
