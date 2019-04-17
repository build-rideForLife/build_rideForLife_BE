
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('drivers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('drivers').insert([
        {
          "username": "DriverProfile1",
          "phone": "4159228525",
          "password": "$2a$10$1FwcKCXW7nZDPcG0It4LNukUlkEwNJtmj23twQ35Feb1G7U9PKDHK",
          "driver": true,
          "email": "Driver1@rfl.com",
          "location": "MD"
        },
        {
          "username": "DriverProfile2",
          "phone": "4159128525",
          "password": "$2a$10$K6H2UofS8zuQHgu989pzd.wLYVomrx79flYHfZouTlDh5A1lhNciK",
          "driver": true,
          "email": "Driver2@rfl.com",
          "location": "CA"
        },
        {
          "username": "DriverProfile3",
          "phone": "4150128525",
          "password": "$2a$10$TGUjLyS7UQnCcSbIlOZQoes8O/W1PlIyHxPxiHgkjGMSUZjD/kgIS",
          "driver": true,
          "email": "Driver3@rfl.com",
          "location": "PA"
        },
        {
        "username": "DriverProfile4",
        "phone": "41593428525",
        "password": "$2a$10$jFqlk2p2QT43VNK0XbBdhOxkALk/2UlZy141J2YbSKn.32qZPnRhS",
        "driver": true,
        "email": "Driver4@rfl.com",
        "location": "CA"
        }
      ]);
    });
};

