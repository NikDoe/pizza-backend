import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Pizza = sequelize.define('pizza', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	// src: {
	// 	type: DataTypes.STRING,
	// },
	title: {
		type: DataTypes.STRING,
	},
	types: {
		type: DataTypes.ARRAY(DataTypes.INTEGER),
	},
	sizes: {
		type: DataTypes.ARRAY(DataTypes.INTEGER),
	},
	price: {
		type: DataTypes.FLOAT,
	},
	category: {
		type: DataTypes.FLOAT,
	},
	rating: {
		type: DataTypes.FLOAT,
	},
});

export default Pizza;
