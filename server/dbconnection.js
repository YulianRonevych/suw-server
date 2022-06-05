const sql = require("mysql");

const db = sql.createPool({
    connectionLimit: 100,
    user: "bb33da05218f57",
    host: "eu-cdbr-west-02.cleardb.net",
    password: "848d3d31",
    database: "heroku_a91f1fe158d391d"
}
);

module.exports = db;

//mysql://bb33da05218f57:848d3d31@eu-cdbr-west-02.cleardb.net/heroku_a91f1fe158d391d?reconnect=true