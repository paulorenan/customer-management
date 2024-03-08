require('dotenv').config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, } = process.env;

module.exports = {
  "development": {
    "username": DB_USER || "postgres",
    "password": DB_PASSWORD || "1234",
    "database": DB_NAME || "customers_db",
    "host": DB_HOST || "localhost",
    "port": "5432",
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USER || "postgres",
    "password": DB_PASSWORD || "1234",
    "database": DB_NAME || "customers_db",
    "host": DB_HOST || "localhost",
    "port": "5432",
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USER || "postgres",
    "password": DB_PASSWORD || "1234",
    "database": DB_NAME || "customers_db",
    "host": DB_HOST || "localhost",
    "port": "5432",
    "dialect": "postgres"
  }
}
