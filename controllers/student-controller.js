import Student from "../models/Student.js";
import bcrypt from "bcryptjs"

export const signup = async (req,res, next) =>{
    const {sid, name, password, gender, email, phone } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    let student;
    try{
        let existedStudent = await Student.findOne({sid});
        if(existedStudent){
            console.log("already registered");
            return res.send("unsuccess")
        }
        student = new Student({sid, name, password:hashedPassword, gender, email, phone});
        student = await student.save();
    }catch(err){
        console.log("internal error ", err)
        return res.send("unsuccess")
    }
    if(!student){
        console.log("not saved to database");
        return res.send("unsuccess")
    }
    res.send("success")
}


export const login = async (req,res, next) =>{
    const {sid, password } = req.body;
    let existedStudent;
    try{
        existedStudent = await Student.findOne({sid});
    }catch(err){
        console.log("exception ocuured ",err);
        return res.send("notmatch");
    }
    if(!existedStudent){
        console.log("not found");
        return res.send("notmatch");
        
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existedStudent.password);
    if(!isPasswordCorrect){
        console.log("found but password not match");
        return res.send("notmatch")
        
    }
    res.send("match")
}

export const getLoginStudentData = async (req, res) =>{
    try{
        let sid = req.query.sid;
        let student = await Student.findOne({sid:sid});
        return res.json(student);
    }catch(err){
        console.log(err);
        return res.send("Something error");
    }
    
}