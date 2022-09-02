import { Router } from 'express';

const pizzaRouter = Router();

pizzaRouter.get('/', (req, res) => {
	res.send('все пиццы получены');
});

export default pizzaRouter;
