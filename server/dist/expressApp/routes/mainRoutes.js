"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { database } from "mysql/MySQL";
const mainRoutes = express_1.default.Router();
mainRoutes.get("/", (req, res) => {
    // res.send("Hello World! 13");
    res.render("index", { version: 0.2 });
});
// mainRoutes.get("/mysql", async (req: Request, res: Response) => {
//     const result = await database.promise().query("SHOW TABLES");
//     const result2 = result[0];
//     res.send({ result2 });
// });
exports.default = mainRoutes;
