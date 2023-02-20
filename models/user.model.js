const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:String,
email:String,
gender:String,
password:String,
age : Number,
city : String
},{
    versionKey: false
})

const userModel = mongoose.model("linkedInUser",userSchema);
module.exports={
    userModel
}