import mongoose from "mongoose";

const statusSchema = mongoose.Schema({
    idcardStatus: String,
    bonafideStatus: String
});

export default mongoose.model("Status", statusSchema);