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

// image storage engine
const storage = multer.diskStorage({

    destination: './upload/images',
    filename:(req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
    
})
    
const upload = multer({storage:storage})
app.use('/images',express.static('upload/images'))
//Upload endpoint for images
app.post("/upload", upload.single('product'), (req,res)=>{

    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })

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