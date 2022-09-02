import { AppDataSource } from '../db.js';
import Pizza from '../models/Pizza.js';

class PizzaService {
	async createPizza(pizza) {
		const pizzaRepo = await AppDataSource.getRepository(Pizza);
		const newPizza = pizzaRepo.create(pizza);
		await pizzaRepo.save(newPizza);
		return newPizza;
	}
}

export default new PizzaService();
