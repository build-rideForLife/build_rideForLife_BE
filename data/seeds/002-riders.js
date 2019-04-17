
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('riders').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('riders').insert([
        {
          "username": "RiderProfile1",
          "phone": "4152129220",
          "password": "$2a$10$BxT65RFJ1LgMR0cEKCCWqu8RsAqjNu4HZ46D/DNKiDeZbwZrni9Se",
          "driver": false
        },
        {
          "username": "RiderProfile2",
          "phone": "4152320090",
          "password": "$2a$10$Er01380cPQRD7PX8d6kXUuQT6jbMF5lhJqCwhapY5oPb2abkBIdLa",
          "driver": false
        },
        {
          "username": "RiderProfile3",
          "phone": "4154440944",
          "password": "$2a$10$4lfMk./ZDOg6aH8uAuUt3ev5yqdIRNNcZ4e0dQIOCB6cTcGG6N.M6",
          "driver": false
        },
        {
          "username": "RiderProfile4",
          "phone": "4155555525",
          "password": "$2a$10$YQZ3k/eRK.YpMfwNNIdCuebXXmuu3Zs7Mprq2gahtijAFaixof8m.",
          "driver": false
        }
      ]);
    });
};
