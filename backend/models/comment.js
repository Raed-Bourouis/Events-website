
const mongoose = require("mongoose")

let commentSchema = mongoose.Schema({
    ownerId:{
        type: mongoose.Types.ObjectId,
        // required:true
    },
    eventId:{ //eventId
        type:mongoose.Types.ObjectId,
        // required:true

        //comentaire ; nice event
        //submit => {content ; nice event, ownerid: user signed in, eventid: params}
    },
    content:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('comment',commentSchema)


