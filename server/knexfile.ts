import path from 'path';
require('dotenv').config();

const { DB_CLIENT, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

module.exports = {
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true
}