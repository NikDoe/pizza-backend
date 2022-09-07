import { pizzaRepo } from '../utils/utils.js';
import {ILike} from "typeorm";

class PizzaService {
	async createPizza (pizza) {
		const newPizza = pizzaRepo.create(pizza);
		await pizzaRepo.save(newPizza);
		return newPizza;
	}

	async getAllPizza ({ category, sortBy, order, search }) {
		let allPizzas;
		if (!category && !sortBy && !search) {
			allPizzas = await pizzaRepo.find();
		}
		if (category && sortBy && !search) {
			allPizzas = await pizzaRepo.find({ where: { category }, order: { [sortBy]: order } });
		}
		if (!category && sortBy && !search) {
			allPizzas = await pizzaRepo.find({order: { [sortBy]: order } });
		}
		if (!category && sortBy && search) {
			allPizzas = await pizzaRepo.find({ where: { title: ILike(`%${search}%`) }, order: { [sortBy]: order } });
		}
		if (category && sortBy && search) {
			allPizzas = await pizzaRepo.find({ where: { category, title: ILike(`%${search}%`) }, order: { [sortBy]: order } });
		}

		return allPizzas;
	}
}

export default new PizzaService();
