const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const path = require("path");
const router = require("./routes/index");

const app = express();
dotenv.config();
const PORT = process.env.PORT||5000;
// var data = require('./iris');
const db = require('./config/mongoose');
// var mongoose = require('mongoose');
// console.log(mongoose.connection.readyState);
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use("/",router);

// app.get("/rockets",async (req,res,next));

app.listen(PORT, function(err){
    if(err){
        console(`Error: ${err}`);
    }
    else{
        console.log(`Listening on port ${PORT}`);
    }
});

