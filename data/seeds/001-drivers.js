
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drivers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('drivers').insert([
        {
          "username": "DriverProfile1",
          "phone": "4152222920",
          "password": "cool",
          "driver": true
        },
        {
          "username": "DriverProfile2",
          "phone": "4152319990",
          "password": "crazy",
          "driver": true
        },
        {
          "username": "DriverProfile3",
          "phone": "4153333333",
          "password": "nice",
          "driver": true
        },
        {
          "username": "DriverProfile4",
          "phone": "4155554530",
          "password": "what",
          "driver": true
        }
      ]);
    });
};

