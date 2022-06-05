const sql = require("mysql");

const db = sql.createPool({
    connectionLimit: 100,
    user: "root",
    host: "localhost",
    password: "password",
    database: "startupwebsite"
}
);

module.exports = db;