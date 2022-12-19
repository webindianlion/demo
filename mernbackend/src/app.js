const express = require("express");
const app  = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
require("./db/conn");

// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path)
hbs.registerPartials(partials_path);


app.get("/", (req, res)=>{
    // res.send("This is home page");
    res.render("index");
})

app.listen(port, ()=>{
    console.log("server is running on", port)
})