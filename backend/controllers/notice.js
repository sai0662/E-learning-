const Notice = require("../models/noticeSchema");
const User = require("../models/userSchema")

exports.createnotice = async (req, res) => {
    try {
        const user = req._id
        const {course}=await User.findById(user)
        const {notice} = req.body
        if(!notice)
        return res.status(400).send("Notice is required!")
        if(notice.length<10)
        return res.status(400).send("Notice length Should be greater > 10")
        const theNotice=new Notice({user,course,notice})
        const createdNotice=await theNotice.save()
        if(!createdNotice)
        return res.status(400).send("Notices Not Updated")
        return res.status(200).send("Notice Updated")
    
    }
    catch (err) {
        console.log(err)
        return res.status(400).json("something went wrong")
    }
}


exports.getnotice = async (req, res) => {
    try {
        const {_id,course}=req
        let theNotice=await Notice.findOne({course}).populate("user","fullname")
        const {createdAt,notice,user}=theNotice
        const theDate=new Date(createdAt).toLocaleString().split(",")
        if(!theNotice)
        return res.status(400).send("Notice not found")
        return res.status(200).send({notice,by:user.fullname,date:theDate[0]})
    } catch (err) {
        console.log(err)
        res.status(400).json("something to went wrong")
    }

}


exports.updatenotice = async (req, res) => {
    try {
        const notid = req.params.id
        console.log(notid)

        const updatednotice = await Notice.findByIdAndUpdate(notid,
            { $set: req.body },
            { new: true }
        )
        console.log(updatednotice)
        if (updatednotice) {
            return res.status(200).json("Notice updated");
        }
    } catch (err) {
        console.log(err)
        return res.status(400).json("Notice not updated")

    }
}

exports.delnot = async (req, res) => {
    try {
        const notid = req.params.id
        if (notid) {
            const deletenotice = await Notice.findByIdAndDelete(notid)
            if (deletenotice) {
                res.status(200).json("notice deleted");
            }
        }
    } catch (err) {
        console.log(err)
        return res.status(400).json("something went wrong");
    }
}