import { pizzaRepo } from '../utils/utils.js';

class PizzaService {
	async createPizza(pizza) {
		const newPizza = pizzaRepo.create(pizza);
		await pizzaRepo.save(newPizza);
		return newPizza;
	}
}

export default new PizzaService();
