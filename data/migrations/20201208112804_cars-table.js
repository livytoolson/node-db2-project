
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments();
      table.text('VIN').unique().notNullable();
      table.text('make', 128).notNullable();
      table.text('model', 128).notNullable();
      table.integer('mileage').notNullable();
      table.text('transmission type');
      table.text('status of title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropIfTableExists('cars');
};
