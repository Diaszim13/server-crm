/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable('users', table => {  
		table.increments('id').primary();
		table.string('name', 80).notNullable();
		table.string('email', 80).notNullable().unique();
		table.string('password', 80).notNullable();
		table.string('avatar', 80).notNullable();
		table.string('whatsapp', 80).notNullable();
		table.string('bio', 80).notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
