const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

// const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://webindianlion:NyU8fCEcS3SyU6Gb@cluster0.us1dojn.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// mongoose.connect("mongodb://localhost:27017/you").then(()=>{
//     console.log("DB conection successfully--")
// }).catch((e)=>{
//     console.log("No DB connection")
// })

mongoose.connect(uri).then(()=>{
    console.log("DB conection successfully")
}).catch((e)=>{
    console.log("No DB connection")
})