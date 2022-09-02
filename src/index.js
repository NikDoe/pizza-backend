import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './db.js';

const app = express();
const PORT = process.env.PORT || 9001;

app.use(cors());
app.use(express.json());

const start = async () => {
	try {
		await AppDataSource.initialize()
			.then(() => {
				console.log('база данных подключена');
			})
			.catch(error => console.log(error));

		await app.listen(PORT, () => {
			console.log(`сервер запущен на порту ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();