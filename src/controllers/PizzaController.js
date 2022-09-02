class PizzaController {
	async createPizza(req, res, next) {
		try {
			res.send('пицца создана');
		} catch (e) {}
	}

	async getAllPizza(req, res) {
		try {
			res.send('все пиццы получены');
		} catch (e) {}
	}
}

export default new PizzaController();
