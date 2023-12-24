import express from "express";
import mongoose from "mongoose";
import adminRouter from './routes/admin-routes.js';
import studentRouter from "./routes/student-routes.js";
import bonafideRouter from "./routes/bonafide-routes.js";
import idCardRouter from "./routes/idcard-routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/student", studentRouter);
app.use("/bonafide", bonafideRouter);
app.use("/idcard", idCardRouter);


mongoose.connect("mongodb://localhost:27017/student-service"
    )
    .then(()=>
        app.listen(4000, () => 
            console.log("connected to database and server successfully")
        )
    )
    .catch((e)=> console.log(e));
