import  { useState, useEffect } from "react";
import "./EventHomePage.css";

export default function Event( eventId ) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/events/${eventId}`, { method: "GET" })
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
      <div>
        <img src={event.image} alt="Event" />
      </div>
      <div className="info">
        <h2>{event.title}</h2>
        <br />
        <h3>{event.artist}</h3>
        <button>Reserve</button>
      </div>
    </div>
  );
}
