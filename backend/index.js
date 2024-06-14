const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { body, validationResult } = require("express-validator");


app.use(express.json());//everything is passed as json
app.use(cors());//connects to express ap on 4000
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
    
const upload = multer({storage:storage,
    limits:{fileSize: 2 * 1024 * 1024}
})
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

app.post('/addproduct',
    [
        body('name').notEmpty().withMessage('Pavadinimas yra būtinas'),
        body('image').notEmpty().withMessage('Vaizdas yra būtinas'),
        body('category').notEmpty().withMessage('Kategorija yra būtina'),
        body('price').isNumeric().withMessage('Kaina turi būti skaičius')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array()); // Pridėtas kodas
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        let products = await Product.find({});
        let id = products.length > 0 ? products.slice(-1)[0].id + 1 : 1;

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            price: req.body.price,
            date: req.body.date,
            available: req.body.available
        });

        await product.save();
        res.json({
            success: true,
            name: req.body.name,
        });
    }
);


    
// api for product delation

app.post('/removeproduct', async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//Creating API for all products

app.get('/allproducts', async (req,res)=>{

    let products = await Product.find({});
    console.log("All products fetched")
    res.send(products);

})

// scheme for user model
const Users = mongoose.model('Users',{
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})


//endpoint for user registration
app.post('/signup', 
    [
        body('username').notEmpty().withMessage('Vardas yra būtinas'),
        body('email').isEmail().withMessage('El paštas turi būti galiojantis'),
        body('password').isLength({ min: 5 }).withMessage('Slaptažodis turi būti bent 5 simbolių ilgio')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        let check = await Users.findOne({email: req.body.email});
        if (check) {
            res.json({success: false, errors: "Email already exists"});
            console.log("error")
            return;
        }

        let cart = {};
        for(let i = 0; i < 300; i++){
            cart[i] = 0;
        }

        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });

        await user.save();

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, 'secret_ecom');
        res.json({success: true, token});
    }
);


//endpoint for user login

app.post('/login', async (req, res) => {
    let user = await Users.findOne({email: req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if(passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            };
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success: true, token});
        } else {
            console.log("Neteisingas slaptazodis"); // Pridėtas kodas
            res.json({success: false, errors: "Neteisingas slaptazodis"});
        }
    } else {
        console.log("blogas email id"); 
        res.json({success: false, errors: "blogas email id"});
    }
});

// middleware to fetch user 

const fetchUser = async(req, res,next)=>{
    const token = req.header('auth-token');
    if (!token){
        res.status(401).send({errors:"Prasau prisijungti su vartotoju"})
    }
    else {
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch(error){
            res.status(401).send({errors:"Prisijunkite su esamu vartotoju"})
        }
    }
}


//endpoint ot add cart in db
app.post('/addtocart',fetchUser, async (req,res)=>{
    let userData = await Users.findOne({_id:req.user.id})
    userData.cartData[req.body.itemId] +=1
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Pridetas")
})

// endpoint to remove items from cart
app.post('/removefromcart', fetchUser, async(req,res)=>{
    let userData = await Users.findOne({_id:req.user.id})
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Nuomtas")
})

// apri for cart data
app.post('/getcart', fetchUser, async(req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData)
    
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