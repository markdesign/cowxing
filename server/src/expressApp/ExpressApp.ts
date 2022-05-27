import express from "express";
import mainRoutes from "./routes/mainRoutes";
import userRoutes from "./routes/userRoutes";

const ExpressApp = async () => {
    console.log('Here', process.env.PORT);
    const app = express();
    app.use(express.static("public"));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.set("view engine", "ejs");
    app.set('title', 'My Site');
    app.use("/", mainRoutes);
    app.use("/users", userRoutes);

    app.listen(process.env.PORT || 4301);

    console.log(`🚀 Express Server ready at http://localhost:4301`);

    return { app };
};

export { ExpressApp };
