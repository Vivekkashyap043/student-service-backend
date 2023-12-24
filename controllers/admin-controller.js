import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs"

export const signup = async (req,res, next) =>{
    const {eid, name, password, gender, email, phone } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    let admin;
    try{
        admin = new Admin({eid, name, password:hashedPassword, gender, email, phone});
        admin = await admin.save();
    }catch(err){
        return res.send("unsuccess")
        console.log(err);
    }
    if(!admin){
        return res.send("unsuccess")
    }
    res.send("success")
}

export const login = async (req,res, next) =>{
    const {eid, password } = req.body;
    let existedAdmin;
    try{
        existedAdmin = await Admin.findOne({eid});
    }catch(err){
        console.log("exception ocuured ",err);
        return res.send("notmatch");
    }
    if(!existedAdmin){
        console.log("not found");
        return res.send("notmatch");
        
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existedAdmin.password);
    if(!isPasswordCorrect){
        console.log("found but password not match");
        return res.send("notmatch")
        
    }
    res.send(existedAdmin.name);
}
