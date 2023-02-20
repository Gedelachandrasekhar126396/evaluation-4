const express = require("express");

const { postModel } = require("../models/posts.model");
const postRouter = express.Router();


postRouter.post("/create",async(req,res)=>{
    let payload = req.body;
    try{
        let newPost = new postModel(payload);
        await newPost.save();
        res.send("Post Created")
    } catch(err){
       res.send(err.message)
    }
})
postRouter.get("/",async(req,res)=>{
    
    try{
        let posts = await postModel.find();
        res.send(posts)
    } catch(err){
        res.send(err.message)
    }
})
postRouter.post("/update/:id",async(req,res)=>{
    let payload = req.body;
    let num = req.params.id
    try{
        await postModel.findByIdAndUpdate({_id:num},payload);
        res.send("Upadated Successfully")
    } catch(err){
        res.send(err.message)
    }
    
})
postRouter.delete("/delete/:id",async(req,res)=>{

    let num = req.params.id
    try{
        await postModel.findByIdAndDelete({_id:num});
        res.send("Upadated Successfully")
    } catch(err){
        res.send(err.message)
    }
    
})



module.exports ={postRouter}