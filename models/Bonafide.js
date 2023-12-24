import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bonafideSchema = new Schema({
    rollnumber: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    fathername: {
        type: String,
        required: true,
    },
    academicyear: {
        type: String,
        required: true,
    },
    semester:{
        type: String,
        required: true,
    },
    branch:{
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    

})

export default mongoose.model("Bonafide", bonafideSchema);

