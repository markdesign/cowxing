import express, { Request, Response } from "express";
import { database } from "../../mysql/MySQL";

const mainRoutes = express.Router();

mainRoutes.get("/", (req: Request, res: Response) => {
    res.render("index", { version: 0.3 });
});

mainRoutes.get("/mysql", async (req: Request, res: Response) => {
    const result = await database.promise().query("SHOW TABLES");
    const result2 = result[0];
    res.send({ result2, title: 'foo' });
});

export default mainRoutes;
