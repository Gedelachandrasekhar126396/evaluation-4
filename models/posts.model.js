const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    title: String,
    body : String,
    device :String,
    no_if_comments : Number
},{
    versionKey : false
})

const postModel = mongoose.model("linkedInpost",postSchema);
module.exports={
    postModel
}