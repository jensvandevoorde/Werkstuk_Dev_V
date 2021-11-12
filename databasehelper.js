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


knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('users', function (t) {
            t.increments('id').primary();
            t.string('first_name', 100);
        });
    }
});