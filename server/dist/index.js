"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import dotenv from "dotenv";
// const process = require("process");
// dotenv.config();
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
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World! 7");
});
app.listen(4000, () => {
    console.log("Listening");
});
