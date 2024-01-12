const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "node-complete",
    password: "YNRCAJ//7"
})

module.exports = pool.promise();