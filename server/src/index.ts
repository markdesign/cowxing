import express, { Request, Response } from "express";
import dotenv from "dotenv";

const process = require("process");

dotenv.config();

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
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World! 9");
});
app.listen(4000, () => {
    console.log("Listening");
});
