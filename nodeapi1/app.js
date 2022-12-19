require("dotenv").config();
const express =  require("express");
const app = express();

const { getUsers, getUserById, createUser, updataUser, deleteUser, getUserByEmal } = require("./api/users/service.users");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const { checkToken } = require("./auth/token.validation")

app.use(express.json());

app.get("/", checkToken, (req, res)=>{
    // res.send("listning nodeapi1 ")
    getUsers((error, results)=>{
        if (error){
            res.send(error);
            return;
        }
        return res.json({
            success: 1,
            data: results
        })
    })
});

app.get("/:id", checkToken, (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results)=>{
        if(err){
            return res.json({
                success: 0,
                data: err
            })
        }
        return res.json({
            success: 1,
            data: results
        })
    })
});

app.post("/", checkToken, (req, res) => {
    const data = req.body;
    const salt = genSaltSync(10);
    data.password = hashSync(data.password, salt);
    createUser(data, (err, results)=>{
        if(err){
            return res.json({
                success: 0,
                data: err
            })
        }
        return res.json({
            success: 1,
            data: results
        })
    })
});

app.patch("/", checkToken, (req, res)=>{
    const data = req.body;
    updataUser(data, (err, results)=>{
        if(err){
            return res.json({
                success: 0,
                data: err
            })
        }
        return res.json({
            success: 1,
            data: results
        })
    })
});

app.delete("/:id", (req, res) => {
    const id = req.params.id;
    deleteUser(id, (err, results)=>{
        if(err) {
            return res.json({
                success: 0,
                data: err
            })
        }
        return res.json({
            success: 1,
            data: results
        })
    })
});

app.post("/login", (req, res)=>{
    const body = req.body;
    getUserByEmal(body.email, (err, results)=>{
        if(err){
            return res.json({
                success: 0,
                data: err
            })
        }
        if(!results){
            return res.json({
                success: 0,
                message: "Incorrect Email or Password"
            })
        }

        const compResult =  compareSync(body.password, results.password);
        if(compResult){
            console.log(results);
            results.password = undefined;
            const jsonToken = sign({result: results}, "abc123", {expiresIn:"1h"});
            return res.json({
                success: 1,
                message: "Login Successfully",
                token: jsonToken
            });            
        }else{
            console.log(results);
            return res.json({
                success: 0,
                message: "Incorrect Email or Password"
            })
        }
    })
})

app.listen(process.env.APP_PORT, () => {
    console.log("listning nodeapi1 ", process.env.APP_PORT)
})




// {    
//     "first_name": "Sona Rani",
//     "last_name": "Kumari",
//     "gender": "F",
//     "email": "sona@kumar.com",
//     "password": "ttt",
//     "number": 123
// }