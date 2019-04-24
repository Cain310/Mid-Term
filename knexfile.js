// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'midtermdb',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
     tableName: 'knex_migrations',
     directory: "./db/migrations"
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'midtermdb',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
     directory: "./db/migrations"
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'midtermdb',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
     directory: "./db/migrations"
    }
  }

};
