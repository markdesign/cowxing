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
const process_1 = __importDefault(require("process"));
const dotenv_1 = __importDefault(require("dotenv"));
const ExpressApp_1 = require("./expressApp/ExpressApp");
// import { initGraphQlEndpoint } from "./graphql";
// import { database } from "mysql/MySQL";
dotenv_1.default.config();
const system = () => {
    // support ctrl-c
    process_1.default.on("SIGINT", function () {
        console.log("Application is being interrupted...");
        process_1.default.exit(0);
    });
    // support $ docker stop <container id>
    process_1.default.on("SIGTERM", function () {
        console.log("Application is being terminated...");
        process_1.default.exit(0);
    });
};
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    system();
    //////////////////////////////////////////////////////
    // Express
    //////////////////////////////////////////////////////
    (0, ExpressApp_1.ExpressApp)();
    // const app = express();
    // app.set('view engine', 'ejs');
    // app.use(express.static('public'))
    // const httpServer = http.createServer(app);
    // app.get("/", (req: Request, res: Response) => {
    //     // res.send("Hello World! 13");
    //     res.render('index')
    // });
    // app.get("/mysql", async (req: Request, res: Response) => {
    //     const result = await database.promise().query("SHOW TABLES");
    //     const result2 = result[0];
    //     res.send({ result2 });
    // });
    // app.listen(4301);
    // await initGraphQlEndpoint(app);
    // await new Promise<void>(resolve => httpServer.listen({ port: 4301 }, resolve));
});
init();
