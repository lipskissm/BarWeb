const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//db con mongo 
mongoose.connect("mongodb+srv://lipskissm0:LipskioAline2!@cluster0.kcoptqk.mongodb.net/Lipskis");

// API creation

app.get("/", (req, res)=>{
    res.send("Express is running");

})


app.listen(port,(error)=>{
    if(!error){
       console.log("Server running on Port"+port) 
    }
    else
    {
        console.log("Error : "+error)
    }
})