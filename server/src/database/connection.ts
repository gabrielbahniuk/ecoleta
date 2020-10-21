require('dotenv').config();
import knex from 'knex';

const { DB_CLIENT, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

const connection = knex({
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: Number(DB_PORT),
    database: DB_NAME
  },
  useNullAsDefault: true
});

export default connection;