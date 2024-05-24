const clientValidation=require("../validation/Client");
const eventSchema=require("../models/clientSchema");
const { func } = require("joi");
//createEvent getallevent getonevent delete put


let getAllClients=async(req,res)=>{
    try{
        let clients=await clientSchema.find();
        res.status(200).json(clients);
    }
    catch(e){
        console.log(e);
        res.status(404).json({message:"error not found"});
    }
    
}
let getOneClient=async(req,res)=>{
    let clientId =req.params.clientId
    try{
        let client=await eventSchema.findById(clientId);
        res.status(200).json(client);

    }
    catch(e){
        return res.status(500).json({message:"this id does not exist please try again"});
    }

}


let addClient=async (req,res)=>{
    //validation part 
    let {error,value } = clientValidation.validate(req.body);
    if (error){
        return res.status(400).json({message : error.details[0].message})
    }
    //adding event
    try{
        let newclient = await eventSchema.create(req.body)
        res.status(201).json(newclient)

    }catch(e){
        console.log(e)
        res.status(500).json({message:"error occured while creating new client"})
    }
    
}
let deleteClient = async (req,res)=>{
    let clientId =req.params.id
    try{
        let client =await clientSchema.findByIdAndDelete(clientId);
        res.status(200).json({message:"deleted successfully"});
    }
    catch(e){
        return res.status(404).json({message:"this id does not exist please try again"});
    }
}
let updateClient= async (req,res) => {
    const client =req.params.id;
    let {error, value}= clientValidation.validate(req.body)
    if (error){
    return res.status(400).json({message : error.details[0].message})
    }
    try{
        let event= await clientSchema.findByIdAndUpdate(eventId,value,{new:true,old:false});
        res.status(200).json({message:"updated successfully"})
        
    }
    catch(e){
        return res.status(404).json({message:"this id does not exist please try again"});
    }
}
module.exports={
    getAllClients,
    getOneClient,
    addClient,
    deleteClient,
    updateClient
}

