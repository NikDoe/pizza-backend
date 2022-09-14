import { EntitySchema } from 'typeorm';

export default new EntitySchema({
	name      : 'Cart',
	tableName : 'CartItems',
	columns   : {
		id      : {
			primary   : true,
			type      : 'int',
			generated : true
		},
		pizzaId : {
			type : 'int'
		},
		src     : {
			type : 'text'
		},
		title   : {
			type : 'varchar'
		},
		type    : {
			type : 'int'
		},
		size    : {
			type : 'int'
		},
		price   : {
			type : 'real'
		},
		count   : {
			type    : 'int',
			default : 1
		}
	}
});
