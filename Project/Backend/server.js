const express=require('express')
const mongoose=require('mongoose')
const UserSchema=require('./models/User')
const bcrypt=require('bcryptjs')
const User = require('./models/User')



const app=express()
const PORT=3000
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("Welcome")
})

app.post('/register',async (req, res)=>{
    const {Username, Email, Password }=req.body
    try{
        const hashedPassword= await bcrypt.hash(Password,10)
        const User= new UserSchema({Username,Email,Password:hashedPassword})
        await User.save()
        res.json({message:"User Register.."})
        console.log("User Registeration Complete...")

    }
    catch(err){
        console.log(err)
    }
})

app.post('/Login',async(req, res)=>{

    const {Email, Password}=req.body
    try{
        const User= await UserSchema.findOne({ Email });
        if (!User || !(await bcrypt.compare(Password, User.Password)))
        {
            return res.status(400).json({message : "Invalid Credentials"});
        }
    res.json({message: "Login Successful", Username: User.Username});

    }
    catch(err){
        console.log(err)
    }
})

mongoose.connect("mongodb+srv://reddysahu18:reddysahu18@cluster0.y7eo9.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{console.log("DB connected successfully...")}
).catch(
    (err)=>console.log(err)
)


app.listen(PORT,(err)=>{
    if(err)
    {
        console.log("Error")
    }
    console.log("Server is running on port : "+PORT)
})