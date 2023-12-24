import express from "express";
import multer from "multer";
import { getAllIdCards, applyIdCard } from "../controllers/idcard-controller.js";

const idCardRouter = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

idCardRouter.post("/apply",upload.single('photo'),  applyIdCard);
idCardRouter.get("/all-idcards", getAllIdCards);

export default idCardRouter;
