
const mongoose = require("mongoose")

let commentSchema = mongoose.Schema({
    owner:{
        type: mongoose.Types.ObjectId,
        required:true
    },
    post:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('comment',commentSchema)


