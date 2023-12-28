const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "cometomeAmir123",
    host: "localhost",
    port: 5432,
    database: "todoapp"
});

const pool2 = new Pool({
    user: "postgres",
    password: "cometomeAmir123",
    host: "localhost",
    port: 5432,
    database: "jwt_authentication"
})

module.exports = pool;
module.exports = pool2;