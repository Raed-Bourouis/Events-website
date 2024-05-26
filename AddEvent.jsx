import {useState} from "react";
import { toast } from "react-toastify";

export default function AddEvent(setLoading){
    let [eventTitle,setTitle]=useState("");
    let [artist,setArtist]=useState("");
    let [image,setImage]=useState("");
    let [description,setDescription]=useState("");
    let [start,setStart]=useState("");
    let [end,setEnd]=useState("");
    let [location,setLocation]=useState(""); 
    let [ticketsNumber,setTicket]=useState("");
   
   function addEvent(e){
    e.preventDefault()
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
.then(res=>res.json())
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
        setImage("");
        setDescription("");
        setStart("");
        setEnd("");
        setLocation("");
        setTicket("");
    }
})
}

return(
    
    
    <form onSubmit={addEvent}>
      <div className="container_event">
        <div>
          <img src={image} alt="Event" />
        </div>
        <div className="info">
          <label>
            Event Title:
            <input
              type="text"
              value={eventTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Artist:
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Start Date:
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label>
            Number of Tickets:
            <input
              type="number"
              value={ticketsNumber}
              onChange={(e) => setTicket(e.target.value)}
            />
          </label>
          <button type="submit" >
          </button>
        </div>
      </div>
    </form>
  );
}
   






 

