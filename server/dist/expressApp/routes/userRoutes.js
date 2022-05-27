"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes = express_1.default.Router();
userRoutes.get("/", (req, res) => {
    res.send("Users List");
});
userRoutes.get("/new", (req, res) => {
    res.send("User Create");
});
userRoutes.get("/:id", (req, res) => {
    res.send(`Get User ${req.params.id}`);
});
userRoutes.put("/:id", (req, res) => {
    res.send(`Update User ${req.params.id}`);
});
userRoutes.delete("/:id", (req, res) => {
    res.send(`Delete User ${req.params.id}`);
});
exports.default = userRoutes;
