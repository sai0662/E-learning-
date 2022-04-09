const Subject = require("../models/subject.schema");
const user = require("../models/userSchema");
const Session = require("../models/session.schema");
const randomColor = require("randomcolor");
const meeting=require("../models/meetingLink")
//create session
exports.createsession = async (req, res) => {
  const {course}=req
  try {
    const {
      sessionname,
      subject,
      topic,
      subtopic,
      date,
      fromtime,
      totime,
      isCostom,
      isDone,
    } = req.body;
    let splitedDate = date.split("-");
    let splitedFromTime = fromtime.split(":");
    let splitedToTime = totime.split(":");
    const fromdateandtime = new Date(
      splitedDate[0],
      splitedDate[1] - 1,
      splitedDate[2],
      splitedFromTime[0],
      splitedFromTime[1]
    );
    const todateandtime = new Date(
      splitedDate[0],
      splitedDate[1] - 1,
      splitedDate[2],
      splitedToTime[0],
      splitedToTime[1]
    );
    let theSession;
    if (isCostom)
      theSession = new Session({
        sessionname,
        subject,
        fromdateandtime,
        todateandtime,
        teacher: req._id,
        isDone,
        course
      });
    else
      theSession = new Session({
        subject,
        topic,
        subtopic,
        fromdateandtime,
        todateandtime,
        teacher: req._id,
        isDone,
        course
      });
      console.log(theSession)
    const newsession = await theSession.save();
    if (!newsession) return res.status(400).send("Session Not Created!");
    return res.status(200).send("Session  Created!");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Session Not Created!");
  }
};

//get all sessions
exports.getsession = async (req, res) => {
  try {
    //  console.log("working")
    const { _id, course } = req;
    const dataToSend = [];
    const theSubjects = await Subject.find({ course });
    for (let i = 0; i < theSubjects.length; i++) {
      const { _id, Name, course, Semester } = theSubjects[i];
      let dataToAdd = { _id, Name, course, Semester };
      let topics = [];
      for (let j = 0; j < theSubjects[i].topics.length; j++) {
        const { Name } = theSubjects[i].topics[j];
        let topic = { Name };
        let subTopics = [];
        for (let k = 0; k < theSubjects[i].topics[j].SubTopics.length; k++) {
          let subTopicIs = theSubjects[i].topics[j].SubTopics[k];
          let subtopic = { Name: subTopicIs };
          let session = await Session.findOne({
            subject: _id,
            topic: Name,
            subtopic: subTopicIs,
          })
            .select(["-subject", "-topic", "-subtopic"])
            .populate("teacher", ["fullname", "email", "mobile"]);
          subtopic.session = session;
          subTopics.push(subtopic);
        }
        topic.subTopic = subTopics;
        topics.push(topic);
      }
      dataToAdd.topics = topics;
      dataToSend.push(dataToAdd);
    }
    return res.status(200).send(dataToSend);
  } catch (err) {
    console.log(err);
    return res.status(400).json("something went wrong");
  }
};

//get session according to the query
exports.getsesbyquery = async (req, res) => {
  const datequery = req.query.date;
  const subquery = req.query.subject;
  try {
    let sessions;

    if (datequery) {
      sessions = await Session.find().sort({ createdAT: -1 }).limit(6);
    } else if (subquery) {
      sessions = await Session.find({
        subject: {
          $in: [subquery],
        },
      });
    } else {
      sessions = await Session.findById(req.params.id);
    }
    return res.status(200).json(sessions);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

exports.getSessionStatus = async (req, res) => {
  try {
    const { id, sem } = req.params;
    let dataToSend = [];
    const subjects = await Subject.find({ course: id, Semester: sem });
    for (let i = 0; i < subjects.length; i++) {
      let dataToAdd = {};
      dataToAdd.Name = text_truncate(subjects[i].Name, 17);
      let total = 0;
      let complete = 0;
      for (let j = 0; j < subjects[i].topics.length; j++) {
        total = total + subjects[i].topics[j].SubTopics.length;
        complete =
          complete +
          (await Session.count({
            subject: subjects[i]._id,
            topic: subjects[i].topics[j].Name,
            isDone: true,
          }));
      }
      dataToAdd.total = total;
      dataToAdd.complete = complete;
      let percentage = Math.floor((100 * Number(complete)) / Number(total));
      if (isNaN(percentage) || percentage == 0) {
        percentage = 1;
      }
      dataToAdd.percentage = percentage;
      dataToAdd.fill = randomColor();
      dataToSend.push(dataToAdd);
    }
    console.log(dataToSend);
    res.send(dataToSend);
  } catch (err) {
    console.log(err);
  }
};

const text_truncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

exports.getUpComingSession = async (req, res) => {
  try {
    const { _id, course } = req;
    let dataToSend = [];
    const theSub= await Subject.find({course})
    const theSession = await Session.find({
      course,
      todateandtime: { $gte: new Date() },
    })
      .sort("fromdateandtime")
      .limit(5).populate("subject","Name");
    for (let i = 0; i < theSession.length; i++) {
      let { _id, subtopic, fromdateandtime, todateandtime, sessionname } =
        theSession[i];
      let dataToAdd = { _id };
      let topic;
      if (subtopic) topic = subtopic;
      if (sessionname) topic = sessionname;
      let isLive = checkIsLive(fromdateandtime, todateandtime);
      let fromtime = dateFomate(fromdateandtime);
      let totime = dateFomate(todateandtime);
      dataToAdd.fromtime = fromtime;
      dataToAdd.totime = totime;
      dataToAdd.topic = topic;
      dataToAdd.isLive = isLive;
      const isLink=await meeting.findOne({sessionId:_id})
      if(!isLink)
      dataToAdd.isLink = false;
      else
      dataToAdd.isLink = isLink.meetingUrl;

      dataToAdd.subject=theSession[i].subject.Name

      dataToSend.push(dataToAdd);
    }
    if (!theSession) return res.status(400).send("session Not Found!");
    console.log(dataToSend)
    return res.status(200).send(dataToSend);
  } catch (err) {
    console.log(err);
    return res.status(400).send("session Not Found!");
  }
};

const checkIsLive = (from, to) => {
  if (from < new Date() && to > new Date()) return true;
  return false;
};
const dateFomate = (date) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const nth = (d) => {
    if (d > 3 && d < 21) return d + "th";
    switch (d % 10) {
      case 1:
        return d + "st";
      case 2:
        return d + "nd";
      case 3:
        return d + "rd";
      default:
        return d + "th";
    }
  };
  const themonths = months[new Date(date).getMonth()];
  const theDay = nth(new Date(date).getDate());
  const time = new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const dateToReturn = { date: themonths + `  ${theDay}`, time };
  return dateToReturn;
};
