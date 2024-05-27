import Event from "./EventHomePage";
import "../style/HomePage.css"
import { useEffect, useState } from "react";
export default function HomePage() {
  let [eventIds, setId] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => {
        setId(data.map((event) => event._id));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event IDs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div id="HomePageEvents">

      <div className="events_container">
        {eventIds.map((id) => (
          <div key={id} className="event">
            <Event eventId={id} />
          </div>
        ))}
      </div>
      
    </div>
  );
}
