import PizzaService from '../services/PizzaService.js';
import { pizzaRepo } from '../utils/utils.js';

class PizzaController {
	async createPizza(req, res, next) {
		try {
			const pizza = await PizzaService.createPizza(req.body);
			res.send(pizza);
		} catch (e) {
			console.log(e);
		}
	}

	async getAllPizza(req, res) {
		try {
			const pizzas = await pizzaRepo.find();
			res.json(pizzas);
		} catch (e) {}
	}
}

export default new PizzaController();
