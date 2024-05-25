import {useState} from "react";
import { toast } from "react-toastify";
export default function Addevent({setLoading}){
    let [eventTitle,setTitle]=useState("");
    let [artist,setArtist]=useState("");
    let [image,setTImage]=useState("");
    let [description,setDescription]=useState("");
    let [start,setDateSta]=useState("");
    let [end,setDateEnd]=useState("");
    let [location,setLocation]=useState(""); 
    let [ticketsNumber,setTicket]=useState("");
   
   function addE(event){
    event.preventDefault();
    setLoading(true);
    fetch("http://localhost:3000/events",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            eventTitletitle:eventTitle,
            artist:artist,
            image:image,
            description:description,
            start:start,
            end:end,
            location:location,
            ticketsNumber:ticketsNumber
        })
    })
.then(res=>resjson())
.then (data=>{
    if(data.error){
        toast.error(data.error);
        setLoading(false);
    }
    else{
        toast.success(data.message);
        setLoading(false);
        setTitle("");
        setArtist("");
        setTImage("");
        setDescription("");
        setDateSta("");
        setDateEnd("");
        setLocation("");
        setTicket("");
    }
})


}
return(
    <div>
        <img src={image }/>
    </div>
)

    //event part





    //comment part