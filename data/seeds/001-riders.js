
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('riders').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('riders').insert([
        {
          "username": "RiderProfile1",
          "phone": "4152129220",
          "password": "cool",
          "driver": false
        },
        {
          "username": "RiderProfile2",
          "phone": "4152320090",
          "password": "crazy",
          "driver": false
        },
        {
          "username": "RiderProfile3",
          "phone": "4154440944",
          "password": "nice",
          "driver": false
        },
        {
          "username": "RiderProfile4",
          "phone": "4155555525",
          "password": "what",
          "driver": false
        }
      ]);
    });
};
