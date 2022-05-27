"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const harrypotter_json_1 = __importDefault(require("./db/harrypotter.json"));
const wands_json_1 = __importDefault(require("./db/wands.json"));
const context = {
    isLoggedIn: true,
    characters: harrypotter_json_1.default,
    wands: wands_json_1.default,
};
exports.default = context;
