import express from "express";
import multer from "multer";
import { getAllIdCards, applyIdCard, deleteIdCard, acceptIdCard } from "../controllers/idcard-controller.js";

const idCardRouter = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

idCardRouter.post("/apply",upload.single('photo'),  applyIdCard);
idCardRouter.get("/all-idcards", getAllIdCards);
idCardRouter.delete("/reject-idcard", deleteIdCard);
idCardRouter.delete("/accept-idcard", acceptIdCard);

export default idCardRouter;
