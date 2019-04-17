
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          "driver_id": 1,
          "rating": 2,
          "review": "driving was ok",
          "rider_id": 2
        },
        {
          "driver_id": 1,
          "rating": 5,
          "review": "Awesome driving! ",
          "rider_id": 1
        },
        {
          "driver_id": 2,
          "rating": 4,
          "review": "driving was pretty good",
          "rider_id": 2
        },
        {
          "driver_id": 2,
          "rating": 3,
          "review": "driving was decent",
          "rider_id": 3
        },
        {
          "driver_id": 3,
          "rating": 1,
          "review": "driving was HORRIBLE",
          "rider_id": 2
        },
        {
          "driver_id": 3,
          "rating": 2,
          "review": "Drives so slow",
          "rider_id": 4
        },
        {
          "driver_id": 4,
          "rating": 5,
          "review": "Excellent driving!",
          "rider_id": 3
        },
        {
          "driver_id": 1,
          "rating": 5,
          "review": "driving was ok",
          "rider_id": 4
        },
        {
          "driver_id": 3,
          "rating": 4,
          "review": "driving was good",
          "rider_id": 4
        },
        {
          "driver_id": 4,
          "rating": 5,
          "review": "driving was crazy good!",
          "rider_id": 2
        },
      ]);
    });
};
