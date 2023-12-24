import express from "express";
import { signup, login } from "../controllers/admin-controller.js";

const adminRouter = express.Router();

adminRouter.post("/signup", signup);
adminRouter.post("/login", login);

export default adminRouter;
