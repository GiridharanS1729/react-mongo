const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/visitor");

const userSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    aadhar: { type: String, required: true },
    intime: { type: Date, required: true },
    outtime: { type: Date, required: true }
});
const user=mongoose.model("all",userSchema,"all");
app.get("/view",(req,res)=>{
    user.find().then((data)=>{res.json(data)})
    .catch(err=>{res.json(err)});
});

app.get('/',(req,res)=>{
    res.json("Welcome to visitor management system");
});

app.listen(1729,()=>{
    console.log("Server is running on port http://localhost:1729");
})