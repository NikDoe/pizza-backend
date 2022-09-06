import { pizzaRepo } from '../utils/utils.js';

class PizzaService {
	async createPizza(pizza) {
		const newPizza = pizzaRepo.create(pizza);
		await pizzaRepo.save(newPizza);
		return newPizza;
	}

	async getAllPizza({category}) {
		let allPizzas;
		if (!category) {
			allPizzas = await  pizzaRepo.find();
		}
		if(category) {
			allPizzas = await pizzaRepo.findBy({category})
		}
		return allPizzas;
	}
}

export default new PizzaService();
