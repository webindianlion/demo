const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://localhost:27017/youtubeRegistration").then(()=>{
    console.log("mongodb connection is ready")
}).catch((e)=>{
    console.log("No DB connection");
})