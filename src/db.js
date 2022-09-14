import { DataSource } from 'typeorm';
import Pizza from './models/Pizza.js';
import Cart from "./models/Cart.js";

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [Pizza, Cart],
	synchronize: true,
	logging: false,
});
