const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Mohdjafar:Acu5dzePFe31VRQE@cluster0.lim8w.mongodb.net/BloggingProject",{useNewUrlParser:true})
.then(()=>console.log("mongodb connected"))
.catch((error)=>console.log(error))


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    }
},{timestamps:true})

const userModel = mongoose.model("User",userSchema)

const userCreate = async function(req,res){
    try{
        let data = req.body;
        let userDetail = await userModel.create(data)
        res.status(201).send({status:true, message:userDetail})
    }
    catch(error){
        res.status(500).send({status:false, message:error.message})
    }
}

app.post("/register",userCreate)

app.listen(3000)