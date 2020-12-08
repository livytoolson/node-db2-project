
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '12345', make: 'Volkswagen', model: 'Tiguan', mileage: 200},
        {VIN: '56789', make: 'Ford', model: 'Raptor', mileage: 100}
      ]);
    });
};
