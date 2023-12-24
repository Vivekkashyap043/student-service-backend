import Bonafide from "../models/Bonafide";
import Status from "../models/Status";

export const getStatus = async(req, res) =>{
    let sid = req.query.sid;
    let existedBonafide  = Bonafide.findOne({rollnumber:sid});
    if(existedBonafide){
        
    }
}