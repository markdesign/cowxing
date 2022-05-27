"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressApp = void 0;
const express_1 = __importDefault(require("express"));
const mainRoutes_1 = __importDefault(require("./routes/mainRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const ExpressApp = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    app.use(express_1.default.static("public"));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.set("view engine", "ejs");
    app.use("/", mainRoutes_1.default);
    app.use("/users", userRoutes_1.default);
    app.listen(4301);
    return { app };
});
exports.ExpressApp = ExpressApp;
