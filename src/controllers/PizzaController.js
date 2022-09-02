import PizzaService from '../services/PizzaService.js';

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
			res.send('все пиццы получены');
		} catch (e) {}
	}
}

export default new PizzaController();
