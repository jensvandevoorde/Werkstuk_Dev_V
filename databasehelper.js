const knex = require('knex')({
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
});