import AddEvent from "./componenets/AddEvent";  
import Navbar from "./components/Navbar";
import FooterPart from "./components/FooterPart";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 
'react-toastify';
import { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

 function Event(){
    const[loading,setLoading]=useState(true);
    const [events,setEvents]=useState([]);
    useEffect(()=>{
    if(loading){
        fetch("http://localhost:8000/events")
        .then(res=>res.json())
        .then(data=>{
          setEvents(data)
        })
        setLoading(false)
  
      }
      
    },[loading])

    return (
        <div className="EventSection">
            <toastContainer/>
            <AddEvent setLoading={setLoading}/>
            {loading ? "....." : <eventList
             events={events} 
             setLoading={setLoading} />}
            
        </div>
    )}
    
    export default function admin(){
        return (
            
        <Routes>
        <Route path="/" element={<Event />}/>
        <Route path="/events/edit/:id" element={<EditEvent />}/>

      </Routes>
    )
  }
function EditEvent({setLoading}){
    let [eventTitle,setTitle]=useState("");
    let [artist,setArtist]=useState("");
    let [image,setImage]=useState("");
    let [description,setDescription]=useState("");
    let [start,setStart]=useState("");
    let [end,setEnd]=useState("");
    let [location,setLocation]=useState(""); 
    let [ticketsNumber,setTicket]=useState("");
    let {id}=useParams();
       function edit(e){
        e.preventDefault();
        fetch ("http://localhost/events/"+id,{method:"PUT", headers: {
            "content-type":"application/json",
        },
        body : JSON.stringify({
           eventTitle:eventTitle,
            artist:artist,
            image:image,
            description:description,
            start:start,
            end:end,
            location:location,
            ticketsNumber:ticketsNumber})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.message){
                toast.error(data.message)
            }
                 
            else{
                toast.success("Created a new blog "+eventTitle);
                setArtist("")
                setDescription("")
                setImage("")
                setTitle("")
                setStart("")
                setEnd("")
                setLocation("")
                setTicket("")
                setLoading(true)
            }
        })
        
    }
    useEffect(()=>{
        fetch("http://localhost:8000/events/"+id)
        .then(res=>res.json())
        .then(data=>{
          setTitle(data.eventTitle);
          setArtist(data.artist)
          setImage(data.image)
          setDescription(data.Description)
          setStart(data.start)
          setEnd(data.end)
          setLocation(data.location)
          setTicket(data.ticketsNumber)


        })
      },[])
       
        


       
}
    
 
