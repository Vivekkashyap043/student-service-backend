import IdCard from "../models/IdCard.js";
import Student from "../models/Student.js";

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
    const updatedStudent = await Student.updateOne(
        { sid: rollnumber },
        { $set: { idcardStatus: "under process" } } 
      );
};

export const deleteIdCard = async (req, res) =>{
    let rollnumber = req.query.rollnumber;
    try {
        const deletedIdCard = await IdCard.findOneAndDelete({ rollnumber: rollnumber });
        if (!deletedIdCard) {
          return res.status(404).json({ error: 'idcard not found' });
        }
        res.json({ message: 'idcard deleted successfully' });
        const updatedStudent = await Student.updateOne(
            { sid: rollnumber },
            { $set: { idcardStatus: "your request is rejected" } } 
          );
      } catch (error) {
        console.error('Error deleting idcard:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export const acceptIdCard = async (req, res) =>{
    let rollnumber = req.query.rollnumber;
    try {
        const deletedIdCard = await IdCard.findOneAndDelete({ rollnumber: rollnumber });
        if (!deletedIdCard) {
          return res.status(404).json({ error: 'idcard not found' });
        }
        res.json({ message: 'idcard deleted successfully' });
        const updatedStudent = await Student.updateOne(
            { sid: rollnumber },
            { $set: { idcardStatus: "Approved, collect at counter" } } 
          );
      } catch (error) {
        console.error('Error deleting idcard:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}