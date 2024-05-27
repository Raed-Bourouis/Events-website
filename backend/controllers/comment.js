const commentValidation=require("../validation/comment");
const commentSchema=require("../models/comment");



let getAllComments=async(req,res)=>{
    try{
        let comments=await commentSchema.find();
        res.status(200).json(clients);
    }
    catch(e){
        console.log(e);
        res.status(404).json({message:"error not found"});
    }
    
}
let getOneComment=async(req,res)=>{
    let commentId =req.params.post
    try{
        let comment=await commentSchema.findById(commentId);
        res.status(200).json(comment);

    }
    catch(e){
        return res.status(500).json({message:"this id does not exist please try again"});
    }

}


let addComment=async (req,res)=>{
    //validation part 
    let {error,value } = commentValidation.validate(req.body);
    if (error){
        return res.status(400).json({message : error.details[0].message})
    }
    //adding comment
    try{
        let newcomment = await commentSchema.create(req.body)
        res.status(201).json(newcomment)

    }catch(e){
        console.log(e)
        res.status(500).json({message:"error occured while creating new comment"})
    }
    
}
let deleteComment = async (req,res)=>{
    let commentId =req.params.post
    try{
        let client =await commentSchema.findByIdAndDelete(commentId);
        res.status(200).json({message:"deleted successfully"});
    }
    catch(e){
        return res.status(404).json({message:"this id does not exist please try again"});
    }
}
let updateComment= async (req,res) => {
    const commentId =req.params.post;
    let {error, value}= commentValidation.validate(req.body)
    if (error){
    return res.status(400).json({message : error.details[0].message})
    }
    try{
        let comment= await commentSchema.findByIdAndUpdate(commentId,value,{new:true,old:false});
        res.status(200).json({message:"updated successfully, client is now : "+comment})
        
    }
    catch(e){
        return res.status(404).json({message:"this id does not exist please try again"});
    }
}
module.exports={
    getAllComments,
    getOneComment,
    addComment,
    deleteComment,
    updateComment
}