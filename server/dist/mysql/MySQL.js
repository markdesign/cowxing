"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.database = mysql2_1.default.createConnection({
    host: "mysql.cowxing.com",
    user: "mark",
    password: "Dcfeb5e838",
    database: "test1",
});
