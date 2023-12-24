import mongoose from "mongoose";

const Schema = mongoose.Schema;

const idCardSchema = new Schema({
    rollnumber: String,
    fullname: String,
    branch:String,
    photo: Buffer,
    address: String
})
  

export default mongoose.model("IdCard", idCardSchema);

