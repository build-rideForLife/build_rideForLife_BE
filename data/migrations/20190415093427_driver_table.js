
exports.up = function(knex) {
    return knex.schema.createTable('drivers', tbl => {
        tbl.increments('driver_id')
        
       
        
        tbl.string('username', 128).notNullable().unique()
        tbl.string('password', 128).notNullable()
        tbl.string('phone').notNullable().unique()
        tbl.boolean('driver').defaultTo(false)
        // tbl.string('location', 128).notNullable()
      //   tbl.integer('price')
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('drivers')
  };
  