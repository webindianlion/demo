
const routerUserLogin = require("express").Router();
const RegisterUser = require("../models/registers");
const { sign } = require("jsonwebtoken");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");

routerUserLogin.post("/", async (req, res)=>{
        const email = req.body.email;

    try{
        const showuser = await RegisterUser.find({email:email});
        const resultPass = showuser[0].password;
        const result = compareSync(req.body.password, resultPass );
        console.log(email);
        const jsontoken = sign({email:email} , "qwe1234", {expiresIn: "1h"});
        // 
        if(result){            
            
            res.status(201).cookie("jwt", jsontoken).redirect('/registration.html');

        }
    
       }catch(e){
           res.status(400).send(e);
       }
    
});

module.exports = routerUserLogin;

