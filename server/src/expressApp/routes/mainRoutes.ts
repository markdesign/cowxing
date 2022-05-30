import express, { Request, Response } from "express";
import { initializeMySQL } from "../../mysql/MySQL";

const mainRoutes = express.Router();

mainRoutes.get("/", (req: Request, res: Response) => {
    res.render("index", { version: 0.3 });
});

mainRoutes.get("/mysql", async (req: Request, res: Response) => {
    const MySQL = await initializeMySQL();
    const result = await MySQL.promise().query("SHOW TABLES");
    const result2 = result[0];
    res.json({ data: result2 });
});

export default mainRoutes;
