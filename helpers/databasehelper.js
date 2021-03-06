async function createTables(pg){
    pg.schema.hasTable("players").then(function(exists){
        if(!exists){
            return pg.schema.createTable("players", function(t){
                t.increments("id").primary();
                t.uuid("uuid");
                t.string("username", 100);
                t.string("password");
            });
        }
    });
    pg.schema.hasTable("genders").then(function(exists){
        if(!exists){
            return pg.schema.createTable("genders", function(t){
                t.increments("id").primary();
                t.uuid("uuid");
                t.string("gender", 100);
            });
        }
    });
}

function checkBodyFields(body, fields) {
    if(!body || !fields) { return false }
  
    let caught = false;
    fields.forEach((f, i) => {
      if(!body[f]) {
        caught = true;
      }
    });
    return !caught;
  }

module.exports = { createTables, checkBodyFields};















/*const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'tester',
        password: 'test',
        database: 'test'
    }
});

knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('username');
    table.string('password');
    table.timestamps();
});

knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('users', function (t) {
            t.increments('id').primary();
            t.string('username', 100);
            t.string('password', 100);
        });
    }
}); */