const express = require("express");
const app = express();
const cors=require("cors")
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT||8000 ;
const authRoute=require("./routes/auth")
const courseRoute=require("./routes/course.route")
const userRoute=require("./routes/user");
const adminRoute=require("./routes/admin");
const sessionRoute=require("./routes/session");
const subjectRoute=require("./routes/subject.route")
const feedbackRoute=require("./routes/feedback");
const noticeRoute=require("./routes/notice");
const meetingRoute=require("./routes/meetingRoute")
const theMainRoute="/ursacaps/api"

require("./database/connect");

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(theMainRoute,authRoute)
app.use(theMainRoute,courseRoute)
app.use(theMainRoute,userRoute)
app.use(theMainRoute,adminRoute)
app.use(theMainRoute,sessionRoute)
app.use(theMainRoute,subjectRoute)
app.use(theMainRoute,feedbackRoute)
app.use(theMainRoute,noticeRoute)
app.use(theMainRoute,meetingRoute)

app.get("/",(req,res)=>{
    res.status(200).json("hello there!");
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})

// madananshika5@gmail.com
// 


// NodeJS
// Event loop
// Callback, Promise, Async Await
// Closures
// Currying, Call, Bind, Apply
// Event Emitters
// Sync vs Async
// Child processes
// Forking
// This [yes you read it right -> this]
// Express Architecture
// Middlewares & Authentication
// Streams
// lib/package managing
// os | fs | path modules
// Objects & modules
// Database
// ACID | CAP Theorem
// Schema/DB Design & Queries
// Mongo | PostgreSQL execution
// Aggregation | Projection | Transaction
// ORMs [Mongoose | sequalize]
// Replication | Sharding | Scaling
// APIs
// REST
// JSON APIs
// Browser APIs
// Authentication | Authorization
// Cookies | OAuth | JWT Auth |
// Caching [Server Side | Client Side]
// CORS | Content Security Policy | SSL | TLS | HTTPS
// HTTP Status Codes


