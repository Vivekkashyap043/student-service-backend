import Bonafide from "../models/Bonafide.js";

export const applyBonafide = async (req,res, next) =>{
    const {rollnumber, fullname, fathername, academicyear, semester, branch, reason } = req.body;
    let bonafide;
    try{
        let existedBonafide = await Bonafide.findOne({rollnumber});
        if(existedBonafide){
            console.log("already applied");
            return res.send("unsuccess")
        }
        bonafide = new Bonafide({rollnumber, fullname, fathername, academicyear, semester, branch, reason });
        bonafide = await bonafide.save();
    }catch(err){
        console.log("internal error ", err)
        return res.send("unsuccess")
    }
    if(!bonafide){
        console.log("not saved to database");
        return res.send("unsuccess")
    }
    res.send("success")
}

export const getAllBonafide = async (req, res) =>{
    try {
        const allBonafides = await Bonafide.find();
        return res.json(allBonafides);
    } catch (error) {
        console.error("Error in retrieving bonafides: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
