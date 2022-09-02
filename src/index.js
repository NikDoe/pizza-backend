import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './router/index.js';
import sequelize from './db.js';
import Pizza from './models/models.js';

const app = express();
const PORT = process.env.PORT || 9001;

app.use(cors());
app.use('/api', router);
app.use(express.json());

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		await app.listen(PORT, () => {
			console.log(`сервер запущен на порту ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
