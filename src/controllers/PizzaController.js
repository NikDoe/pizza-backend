import PizzaService from '../services/PizzaService.js';

class PizzaController {
	async createPizza(req, res) {
		try {
			const pizza = await PizzaService.createPizza(req.body);
			res.send(pizza);
		} catch (e) {
			console.log(e);
		}
	}

	async getAllPizza(req, res) {
		try {
			const pizzas = await PizzaService.getAllPizza(req.query);
			return res.json(pizzas);
		} catch (e) {
			console.log(e)
		}
	}
}

export default new PizzaController();
