const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     family_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    reservations:{
        type:Array,
        required:true,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    over:{
        type:Boolean,
        default: this.End<Date.now()
    }
})

module.exports= mongoose.model('user',userSchema)


