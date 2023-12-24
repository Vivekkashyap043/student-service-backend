import express from "express";
import { signup, login, getLoginStudentData } from "../controllers/student-controller.js";

const studentRouter = express.Router();

studentRouter.post("/signup", signup);
studentRouter.post("/login", login);
studentRouter.get("/details", getLoginStudentData);

export default studentRouter;
