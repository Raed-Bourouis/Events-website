import "./addComment.css";
import {useState} from "react";

export default function addComment(setLoading){

    let[content,useContent]=useState("");
    function Addcomment(comment){
        comment.preventDefault()
        let newComment={content}
    
    fetch("http://localhost:8000/comments",{
        method:"POST",
        headers: {
            "content-type":"application/json",
        },
        body : JSON.stringify(newComment)
    })
    .then(res=>res.json())
    .then(()=>{
            setContent("")
            setLoading(true)
        };
        
    );}
    return(
        <div className="Comment_container">
        
        <textarea value= {content} onChange={(e)=>setContent(e.target.value)}></textarea>
  <button onClick={AddComment}>share Comment</button>
        </div>
    )
}
    

