/*
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function EventList(events,setLoading) {
   async function deleteEvent(id){
    try{
      let res = await fetch("http://localhost:8000/events/"+id,{method:"DELETE"});
      let data = await res.json()
      toast.success("deleted successfully")
      console.log(data)
      setLoading(true)
    }catch(err){
      toast.error("error please try again")
      console.log(err)
    }
    
   }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>image</th>
            <th>eventTitle</th>
            <th>artist</th>
            <th>description</th>
            <th>salle</th>
            <th>start</th>
            <th>End</th>
            <th>location</th>
            <th>ticketsNumber</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {events?.length == 0
            ? "events list empty"
            : events?.map((event) => (
                <tr key={event.key}>
                  <td>{event._id}</td>
                  <td><img width="150px"  src={event.image} alt="error" /></td>
                  <td>{event.eventTitle}</td>
                  <td>{event.artist}</td>
                  <td>{event.description}</td>
                  <td>{event.salle}</td>
                  <td>{event.start}</td>
                  <td>{event.end}</td>
                  <td>{event.location}</td>
                  <td>{event.ticketsNumber}</td>
                
                  
                  <td>
                    <Link to={`events/edit/${event._id}`}><button >Update</button></Link>
                  </td>
                  <td>
                    <button onClick = {()=>deleteEvent(event._id)} style={{background:"red"}}>X</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}*/