import {useEffect,useState} from "react";

export default function EventInfo( eventId){

let [event,setEvent]=useState("");
const[loading,setLoading]=useState(true);
useEffect(()=>{
    fetch(`http://localhost:8000/events/${eventId}`,{methode:"GET"})
   .then(res=>res.json())
   .then(data=>{
      
        setEvent(data);
        setLoading(false);}
    

   )
   .catch(error => {
    console.error('Error fetching the event data:', error);
    setLoading(false);
  });
}, [eventId]);

if (loading) {
return <div>Loading...</div>;}
if (!event) {
    return <div>Error loading event data</div>;
  }

return (
    <div className="container_event">
      <div>
        <img src={event.image  } alt="Event" />
      </div>
      <div className="info">
        <h2>{event.title}</h2><br/>
        <h3>{event.artist}</h3>
        <p>{event.description}</p>
        <p>{new Date(event.start).toLocaleString()} - {new Date(event.end).toLocaleString()}</p>
        <p>{event.location}</p>
        <p>{event.ticketsNumber} tickets available</p>
      </div>
    </div>
  )
}
     
    