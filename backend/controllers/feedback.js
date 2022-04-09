const Feedback = require("../models/feedback.schema");

//create feedback
exports.createfeedback = async (req,res)=>{
    try{
       const {name,feedback} = req.body
          if(! name || !feedback){ 
              return res.status(200).json("please enter name and feedback");
           }
        const feed = new Feedback({
             name:req.body.name,
             feedback:req.body.feedback
                })
          const fb = await feed.save();
          console.log(fb);
        if(fb){
            res.status(200).json("feedback has been added!");
        }

    }catch(err){
        res.status(400).json("something went wrong");
    }
}



//getfeedback by id or all feedbacks
exports.getfeedback = async (req,res)=>{
      try{
        const {feedid} = req.params
        if(feedid){
            const getfeed = await Feedback.findById(feedid)
            console.log(getfeed)
             if(getfeed){
                 return res.status(200).json(getfeed);
             }
        }
        else{
            const getfeeds = await Feedback.find()
            console.log(getfeeds)
            if(getfeeds){
                return res.status(200).json(getfeeds)
            }
        }
      }
    catch(err){
       res.status(400).json("feedback not found");
    }  
}

//get all feedbacks
exports.getAllFeedback = async (req,res)=>{
      try{
        const data = await Feedback.find();
        console.log(data);
        if(!data){
            return res.status(400).json("something went wrong");
        }
        return res.status(200).json(data);
        
      }
    catch(err){
       res.status(400).json("feedback not found");
    }  
}


//update feedback
exports.updatefb = async (req,res)=>{
     try{
       const feedid = req.params.id
       console.log(feedid)

        const updatedfeed = await Feedback.findByIdAndUpdate(feedid,
            { $set: req.body },
             { new: true }
          )
          console.log(updatedfeed)
        if(updatedfeed){
            return res.status(200).json("feedback updated");
        } 
     }catch(err){
        console.log(err)
         return res.status(400).json("feedback not updated")
         
     }
}



//delete feedback
exports.delfeed = async (req,res)=>{
    try{
       const feedid = req.params.id
       if(feedid){
           const deletefeed = await Feedback.findByIdAndDelete(feedid)
            if(deletefeed){
                res.status(200).json("feedback deleted");
            }
       }
    }catch(err){
        console.log(err)
        return  res.status(400).json("something went wrong");
    }
}
