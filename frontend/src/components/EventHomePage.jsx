import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/EventHomePage.css";
import { useSearchParams } from "react-router-dom";


export default function Event( eventId ) {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  let currentUserId = searchParams.has("userId") ? searchParams.get("userId") : "";
  let route = `/event/${eventId.eventId}?userId=${currentUserId}`


  useEffect(() => {
    console.log(eventId)
    fetch(`http://localhost:8000/events/${eventId.eventId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the event data:", error);
        setLoading(false);
      });
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!event) {
    return <div>Error loading event data</div>;
  }

  return (
    <div className="blocevent">
      <div className="info">
        <h2>{event.eventTitle}</h2>
        <br />
        <h3>{event.artist}</h3>
        <Link to={route}><button>Reserve</button></Link>
      </div>
    </div>
  );
}
