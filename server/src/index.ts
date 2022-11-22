import process from "process";
import dotenv from "dotenv";

import { ExpressApp } from "./expressApp/ExpressApp";
import { initGraphQlEndpoint } from "./graphql/Graphql";

dotenv.config();

const system = () => {
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
};

const init = async () => {
    // System
    system();

    // Express (mysql)
    const { app } = await ExpressApp();

    // GraphQL: Neo4j, 
    initGraphQlEndpoint(app);
};

init();
