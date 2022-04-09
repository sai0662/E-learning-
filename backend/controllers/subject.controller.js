const subject=require("../models/subject.schema")
exports.addSubjects=async(req,res)=>{
    let {Name,course,Semester}=req.body
    try{
        if(!Name,!course,!Semester)
        return res.status(400).send("all field is required!")
        const theSubject=new subject({Name,course,Semester})
        const createdSubject=await theSubject.save()
        console.log(createdSubject)
        if(createdSubject)
        return res.status(200).send("Subject Added!")

    }
    catch(err){
        console.log(err)
        return res.status(400).send(`The Subject ${Name.toUpperCase()} is already added`)
    }
}

exports.addTopic=async(req,res)=>{
    try{
        const {subid}=req.params
        let {Name,SubTopics}=req.body
        console.log(req.body)
        Name=Name.toUpperCase()
    
        if(!subid)
        return res.status(400).send("subject id is required")
        const isAlready=await subject.findById(subid).select({topics:{$elemMatch:{Name}}})
        console.log(isAlready)
        if(isAlready.topics.length>0)
        return res.status(400).send(`The Topic ${Name} is already added`)
        const theSub=await subject.findByIdAndUpdate(subid,{$push:{topics:{Name,SubTopics}}})
        if(theSub)
        return res.status(200).send("Topic Added Successfully")
    }
    catch(err){
        console.log(err)
        return res.status(400).send(`Something went Wrong`)
    }
}


exports.getSubjectByTopic=async(req,res)=>{
    try{
        const {sid}=req.params
        if(!sid)
        return res.status(404).send("subject id is required!")
        const theSub= await subject.findById(sid)
        return res.status(200).send(theSub)

    }
    catch(err){
        console.log(err)
        return res.status(404).send("subject id is required!")

    }
}

exports.updateSubject=async(req,res)=>{
    try{
        const {sid}=req.params
        const {Name,topics}=req.body
        const theUpdatedSubject=await subject.findByIdAndUpdate(sid,{Name,topics})
        return res.status(200).send("Topics Updated!")

    }
    catch(err){
        console.log(err)
        return res.status(400).send("Something Went Wrong!")

    }
}

exports.getSubjectsByCourseId=async(req,res)=>{
    try{
        const {cid} =req.params
        const theSubjects=await subject.find({}).where({course:cid})
       if(!theSubjects)
       return res.status(400).send("Something Went Wrong!")
       return res.status(200).send(theSubjects)
    }
    catch(err){
        console.log(err)
        return res.status(400).send("Something Went Wrong!")

    }
}
exports.getTopicsBySemAndCourse=async(req,res)=>{
    try{
        const {_id,course}=req
        const {sem}=req.query
        const theTopics=await subject.find({course,Semester:sem})
        console.log(theTopics)
        if(!theTopics)
        return res.status(400).send("topic Not Found")
        return res.status(200).send(theTopics)

    }
    catch(err){
        console.log(err)
        return res.status(400).send("topic Not Found")
    }
}