const mongoose = require("mongoose")

let eventSchema = mongoose.Schema({
    eventTitle:{
        type:String,
        required:true
    },
    description:{
         type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
    image:{
        type:string,
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
    },
   location : {
       type:String,
        required:true
   },
    
    salle:{
        type:String,
        required:true
    },
     ticketsNumber:{ 
        type:number,
        required:true
    }
    
    
    
})

module.exports= mongoose.model('event',eventSchema)


