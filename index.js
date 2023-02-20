const express = require("express");
const {connection } = require("./db");
const { postRouter } = require("./Routes/post.routes");
const app = express();
require("dotenv").config()
app.use(express.json())
const {userRouter} = require("./Routes/user.routes")
app.get("/",(req,res)=>{
    res.send("HomePage")
})

app.use("/users",userRouter)
 app.use("/posts",postRouter)
app.listen(8000,async()=>{
   try{
    await connection;
    console.log("App is running at 8000 port")
   } catch(err){
    console.log(err)
   }
})