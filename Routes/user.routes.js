const express = require("express");

const { userModel } = require("../models/user.model");
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

userRouter.post("/register",async(req,res)=>{
    let {name,email,gender,city,password,age} = req.body;
    
    try{
        let user = userModel.find({name});
        if(user.length>0){
            res.send("User already exist, please login");
            console.log(user)
        } else {
            
            let newUser = new userModel({name,email,gender,password,city,age});
               await newUser.save();
               res.send("register Successful")
        }
    }catch(err){
        res.send("Invalid Credentials")
    }
})

userRouter.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    try{
        let userFound = await userModel.find({email,password});
        if(userFound.length>0){
            let token = jwt.sign({ course: 'backend' }, 'masai')
            res.send({"msg":"User Found","token":token})
        } else {
            res.send("Invalid credentials")
        }
    } catch(err){
        res.send(err.message)
    }
})

module.exports ={userRouter}