import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './db.js';
import router from './router/index.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 9001;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
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
