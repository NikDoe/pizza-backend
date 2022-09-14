import { AppDataSource } from '../db.js';
import Pizza from '../models/Pizza.js';
import Cart from "../models/Cart.js";

const pizzaRepo = AppDataSource.getRepository(Pizza);
const cartRepo = AppDataSource.getRepository(Cart);

export { pizzaRepo, cartRepo };
