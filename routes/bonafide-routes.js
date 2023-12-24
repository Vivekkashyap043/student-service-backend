import express from "express";
import { acceptBonafide, applyBonafide, deleteBonafide, getAllBonafide } from "../controllers/bonafide-controller.js";

const bonafideRouter = express.Router();

bonafideRouter.post("/apply", applyBonafide);
bonafideRouter.get("/all-bonafides", getAllBonafide);
bonafideRouter.delete("/reject-bonafide", deleteBonafide);
bonafideRouter.delete("/accept-bonafide", acceptBonafide);

export default bonafideRouter;
