
exports.up = function(knex) {
  return knex.schema.createTable('reviews', tbl => {
      tbl.increments('review_id')

      tbl.integer('rating')
      tbl.string('review', 256)
      
      tbl.integer('driver_id')
      .unsigned()
      .references('driver_id')
      .inTable('drivers')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

      tbl.integer('rider_id')
      .unsigned()
      .references('riders_id')
      .inTable('riders')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reviews')
};
