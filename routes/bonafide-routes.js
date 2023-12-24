import express from "express";
import { applyBonafide, getAllBonafide } from "../controllers/bonafide-controller.js";

const bonafideRouter = express.Router();

bonafideRouter.post("/apply", applyBonafide);
bonafideRouter.get("/all-bonafides", getAllBonafide);

export default bonafideRouter;
