const { Pool, Query } = require("pg");

const { DATABASE_URL: connectionString } = process.env;

const db = new Pool({
  // host: "localhost",
  // user: "postgres",
  // port: 5432,
  // password: "ridho123",
  // database: "website",
  connectionString,
});

module.exports = db;
