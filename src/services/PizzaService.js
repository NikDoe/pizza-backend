import {pizzaRepo} from '../utils/utils.js';
import {ILike} from "typeorm";

class PizzaService {
	async createPizza(pizza) {
		const newPizza = pizzaRepo.create(pizza);
		await pizzaRepo.save(newPizza);
		return newPizza;
	}

	async getAllPizza({category, sortBy, order, search, limit, page}) {
		let allPizzas;
		const currentPage = page || 1;
		const take = limit || 4;
		const skip = currentPage * take - take;
		if (!category && !sortBy && !search) {
			allPizzas = await pizzaRepo.findAndCount({skip, take});
		}
		if (category && sortBy && !search) {
			allPizzas = await pizzaRepo.findAndCount({where: {category}, order: {[sortBy]: order}, skip, take});
		}
		if (!category && sortBy && !search) {
			allPizzas = await pizzaRepo.findAndCount({order: {[sortBy]: order}, skip, take});
		}
		if (!category && sortBy && search) {
			allPizzas = await pizzaRepo.findAndCount({
				where: {title: ILike(`%${search}%`)},
				order: {[sortBy]: order},
				skip,
				take
			});
		}
		if (category && sortBy && search) {
			allPizzas = await pizzaRepo.findAndCount({
				where: {category, title: ILike(`%${search}%`)},
				order: {[sortBy]: order},
				skip,
				take
			});
		}

		return allPizzas;
	}
}

export default new PizzaService();
