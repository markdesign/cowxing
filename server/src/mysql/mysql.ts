import mysql from "mysql2";

export const database = mysql.createConnection({
    host: "mysql.cowxing.com",
    user: "mark",
    password: "Dcfeb5e838",
    database: "test1",
});
