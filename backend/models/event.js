const mongoose = require("mongoose")

let eventSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
    over:{
        type:Boolean,
        default: this.End<Date.now()
    }
})

module.exports= mongoose.model('event',eventSchema)


