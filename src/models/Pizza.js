import { EntitySchema } from 'typeorm';

export default new EntitySchema({
	name: 'Pizza',
	tableName: 'Pizzas',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		src: {
			type: 'text',
		},
		title: {
			type: 'varchar',
		},
		types: {
			type: 'int',
			array: true,
			default: [],
		},
		sizes: {
			type: 'int',
			array: true,
			default: [],
		},
		price: {
			type: 'real',
		},
		category: {
			type: 'int',
		},
		rating: {
			type: 'real',
		},
	},
});
