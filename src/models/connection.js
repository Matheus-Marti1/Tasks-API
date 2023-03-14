const mysql = require("mysql2/promise");

require("dotenv").config();

const connection = mysql.createPool({
  // host: process.env.MYSQL_HOST || "localhost:3306",
  host: "0.0.0.0",
  user: process.env.MYSQL_USER || "user",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DB || "db",
});

module.exports = connection;
