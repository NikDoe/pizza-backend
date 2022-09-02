import { AppDataSource } from '../db.js';
import Pizza from '../models/Pizza.js';

const pizzaRepo = AppDataSource.getRepository(Pizza);

export { pizzaRepo };
