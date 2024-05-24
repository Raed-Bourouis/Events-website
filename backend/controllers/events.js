// const eventsValidation=require("../validation/Events");
const eventSchema=require("../models/event");
//createEvent getallevent getonevent delete put


let getAllEvents=async(req,res)=>{
    try{
        let events= await eventSchema.find();
        res.status(200).json(events);
    }
    catch(e){
        console.log(e);
        res.status(500).json({message:"error not found"});
    }
    
}
let getOneeEvent=async(req,res)=>{
    let eventId =req.params.eventId
    try{
        let event=await eventSchema.findById(eventId);
        res.status(200).json(event);

    }
    catch(e){
        return res.status(500).json({message:"this id does not exist please try again"});
    }

}


let createEvent=async (req,res)=>{
    //validation part 
    // let {error,value } = eventsValidation.validate(req.body);
    // if (error){
    //     return res.status(400).json({message : error.details[0].message})
    // }
    //adding event
    try{
        let newevent = await eventSchema.create(req.body)
        res.status(201).json(newevent)

    }catch(e){
        console.log(e)
        res.status(500).json({message:"error while creating new event"})
    }
    
}
let deleteEvent = async (req,res)=>{
    let eventId =req.params.id
    try{
        let event=await eventSchema.findByIdAndDelete(eventId);
        res.status(200).json({message:"deleted successfully"});
    }
    catch(e){
        return res.status(500).json({message:"this id does not exist please try again"});
    }
}
let updateEvent= async (req,res) => {
    const eventId =req.params.id;
    // let {error, value}= eventsValidation.validate(req.body)
    // if (error){
    // return res.status(400).json({message : error.details[0].message})
    // }
    try{
        let event= await eventSchema.findByIdAndUpdate(eventId,req.body,{new:true,old:false});
        res.status(200).json({message:"updated successfully, created event"+event})
        
    }
    catch(e){
        return res.status(404).json({message:"this id does not exist please try again"});
    }
}
module.exports={

    getAllEvents,
    getOneeEvent,
    createEvent,
    deleteEvent,
    updateEvent
}

