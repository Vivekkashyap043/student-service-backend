import IdCard from "../models/IdCard.js";

export const getAllIdCards = async (req, res) => {
        try {
            const allIdCards = await IdCard.find();
            return res.json(allIdCards);
        } catch (error) {
            console.error("Error retrieving ID cards: ", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

export const applyIdCard = async (req, res) => {
    console.log("idcard application called");
    const { rollnumber, fullname, branch, address } = req.body;
    const photoBuffer = req.file ? req.file.buffer : null;
    let idCard;
    try {
        let existedIdCard = await IdCard.findOne({rollnumber});
        if(existedIdCard){
            console.log("already applied");
            return res.send("unsuccess")
        }
        idCard = new IdCard({rollnumber, fullname, branch, photo: photoBuffer, address});
        idCard = await idCard.save();
    } catch (err) {
        console.log("internal error ", err);
        return res.send("unsuccess");
    }
    if(!idCard){
        console.log("not saved to database");
        return res.send("unsuccess")
    }
    res.send("success")
};