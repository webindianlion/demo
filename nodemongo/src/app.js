const express = require("express");
const app = express();
var cors = require('cors')
require("dotenv").config();

const path = require("path");

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

// console.log(static_path);

app.use(express.static(static_path))

require("./db/conn");
const port  = process.env.APP_PORT || 3000;

const router = require("./router/router");
const  routerRegisterUser = require("./router/router-registeruser");
const routerUserLogin = require("./router/router-userlogin");

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get("/", (req, res)=>{
//  res.send("Hello from Vinod");
// });

app.use("/", router);
app.use("/registeruser", routerRegisterUser);
app.use("/userlogin", routerUserLogin)


app.listen(port, ()=>{
    console.log("server listning")
})

// {
//     "ranking": 1,
//     "name": "Vinod",
//     "dob": "20 NOV 1979",
//     "country": "India",
//     "score": "1477"
//  }