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

// scheme for db products
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    }
})

app.post('/addproduct',async (req,res)=> {

    const product = new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price,
        date:req.body.date,
        avilable:req.body.avilable
    });
    console.log(product);
    await product.save();
    console.log("Saved")
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