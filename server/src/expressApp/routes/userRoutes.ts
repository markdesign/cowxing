import express, { Request, Response } from "express";
const userRoutes = express.Router();

userRoutes.get("/", (req: Request, res: Response) => {
    res.send("Users List");
});

userRoutes.get("/new", (req: Request, res: Response) => {
    res.send("User Create");
});

userRoutes.get("/:id", (req: Request, res: Response) => {
    res.send(`Get User ${req.params.id}`);
});

userRoutes.put("/:id", (req: Request, res: Response) => {
    res.send(`Update User ${req.params.id}`);
});

userRoutes.delete("/:id", (req: Request, res: Response) => {
    res.send(`Delete User ${req.params.id}`);
});

export default userRoutes;
