import Navbar from "./components/Navbar";
import Event from "./components/EventHomePage";
import "./App.css";
import FooterPart from "./components/FooterPart";
import { useEffect,useState } from "react";
 export default function App() { let [eventIds,setId]=useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
  
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => {
        setId(data.map(event => event._id)); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event IDs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (<div>Loading...</div>);
  }
    return (
    <div>
      <header>
        <Navbar/>
      </header>
        <div className="events_container">
        {eventIds.map((id) => (
            <div key={id} className="event">
              <Event eventId={id} />
            </div>
          ))}
          </div>
        <FooterPart/>
     </div>
  );}
  /*import Navbar from "./components/Navbar";
import Event from "./components/EventHomePage";
import FooterPart from "./components/FooterPart";
import ReservedEventsPage from "./components/ReservedEventsPage"; 
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

export default function App() {
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
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <div className="events_container">
                {eventIds.map((id) => (
                  <div key={id} className="event">
                    <Event eventId={id} />
                  </div>
                ))}
              </div>
            }
          />
          <Route path="/reserved-events" element={<ReservedEventsPage />} />
        </Routes>
        <FooterPart />
      </div>
    </Router>
  );
}
*/ 