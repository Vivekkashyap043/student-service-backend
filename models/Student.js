import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    sid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    idcardStatus:{
        type: String
    },
    bonafideStatus:{
        type: String
    },

})

export default mongoose.model("Student", StudentSchema);

