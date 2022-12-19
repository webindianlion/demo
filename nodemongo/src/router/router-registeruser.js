const routerRegisterUser = require("express").Router();
const RegisterUser = require("../models/registers");
const { hashSync, genSaltSync } = require("bcrypt");

routerRegisterUser.post("/", async (req, res) => {
    const body =  req.body;
    const salt = genSaltSync(10);
    // const salt1 = genSaltSync(11);
    body.password = hashSync(body.password, salt);
    body.confirmpassword = hashSync(body.confirmpassword, salt);
try{
    if(body.password === body.confirmpassword){
    const addingUsers = new RegisterUser(req.body);
    const insertusers = await addingUsers.save();
    res.status(201).send(insertusers);
    }else{
        res.send("password is not matching")
    }
    
   }catch(e){
       res.status(400).send(e);
   }
});
routerRegisterUser.get("/", async (req, res) => {
    try{
        const showusers = await RegisterUser.find({});
        res.status(201).send(showusers);
       }catch(e){
           res.status(400).send(e);
       }
    });



module.exports = routerRegisterUser;

// {
//     "firstname": "vinod",
//     "lastname": "kumar",
//     "email": "webindianlion@gmai.com",
//     "phone": 9810272223,
//     "gender": "male",
//     "password": "a",
//     "confirmpassword": "a"
// }