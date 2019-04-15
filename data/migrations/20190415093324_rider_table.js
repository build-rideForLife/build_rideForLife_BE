exports.up = function(knex) {
    return knex.schema.createTable('riders', tbl => {
      tbl.increments('riders_id')
  
      tbl.string('username', 128).notNullable()
      tbl.string('phone').notNullable().unique()
      tbl.string('password', 128).notNullable()
      tbl.boolean('driver').defaultTo(false)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('riders')
  };
  