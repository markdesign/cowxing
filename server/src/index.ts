import process from "process";
import http from "http";

import express, { Request, Response } from "express";
import dotenv from "dotenv";

import { initGraphQlEndpoint } from "./graphql";
import { database } from "./mysql/mysql";

dotenv.config();

const init = async () => {
    // support ctrl-c
    process.on("SIGINT", function () {
        console.log("Application is being interrupted...");
        process.exit(0);
    });

    // support $ docker stop <container id>
    process.on("SIGTERM", function () {
        console.log("Application is being terminated...");
        process.exit(0);
    });

    const app = express();
    const httpServer = http.createServer(app);

    app.get("/", (req: Request, res: Response) => {
        res.send("Hello World! 12");
    });

    app.get("/mysql", async (req: Request, res: Response) => {
        const result = await database.promise().query("SHOW TABLES");
        const result2 = result[0];
        res.send({ result2 });
    });

    await initGraphQlEndpoint(app);

    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
};

init();
