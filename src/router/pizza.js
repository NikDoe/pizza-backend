import { Router } from 'express';
import PizzaController from '../controllers/PizzaController.js';

const pizzaRouter = Router();

pizzaRouter.post('/', PizzaController.createPizza);
pizzaRouter.get('/', PizzaController.getAllPizza);

export default pizzaRouter;
