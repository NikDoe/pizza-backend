import { cartRepo } from '../utils/utils.js';

class CartController {
	async addPizzaToCart (req, res) {
		try {
			const { pizzaId, src, title, type, size, price } = req.body;
			const newItem = await cartRepo.create({ pizzaId, src, title, type, size, price });
			await cartRepo.save(newItem);
			return res.json(newItem);
		} catch (e) {
			throw new Error(e);
		}
	}

	async getCart (req, res) {
		const cart = await cartRepo.find();
		return res.json(cart);
	}

	async updatePizzaInCart (req, res) {
		const { pizzaId, title, type, size } = req.body;
		const existPizza = await cartRepo.findOne({ where: { pizzaId, title, type, size } });
		const updateCount = existPizza.count + 1;
		return res.json(await cartRepo.save({ ...existPizza, count: updateCount }));
	}
}

export default new CartController();
