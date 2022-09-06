import {pizzaRepo} from '../utils/utils.js';

class PizzaService {
	async createPizza(pizza) {
		const newPizza = pizzaRepo.create(pizza);
		await pizzaRepo.save(newPizza);
		return newPizza;
	}

	async getAllPizza({category, sortBy, order}) {
		let allPizzas;
		if (!category && !sortBy) {
			allPizzas = await pizzaRepo.find()
		}
		if (category && !sortBy) {
			allPizzas = await pizzaRepo.findBy({category})
		}

		if (!category && sortBy) {
			allPizzas = await pizzaRepo.find({order: {[sortBy]: order}})
		}
		if (category && sortBy) {
			allPizzas = await pizzaRepo.find({where:{category}, order: {[sortBy]: order}})
		}

		return allPizzas;

	}
}

export default new PizzaService();
