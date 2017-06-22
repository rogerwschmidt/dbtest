
exports.up = function(knex, Promise) {
  return knex.schema.createTable('test', function(table){
    table.increments();
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('test');
};
