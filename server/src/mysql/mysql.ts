import mysql from "mysql2";

const initializeMySQL = async () => {
    const MySQL = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    });
    return MySQL;
};

export { initializeMySQL };
