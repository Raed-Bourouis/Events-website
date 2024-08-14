import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/joy/Button";

export default function EventInfo() {
  let idparams = useParams();
  let eventId = idparams.id;
  const [searchParams] = useSearchParams();
  let [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:8000/events/${eventId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the event data:", error);
        setLoading(true);
      });
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!event) {
    return <div>Error loading event data</div>;
  }

  async function makeReservation() {
    let currentUserId = searchParams.has("userId")
      ? searchParams.get("userId")
      : "";

    try {
      console.log(eventId);
      console.log(event);
      let awtuser = await fetch(
        "http://localhost:8000/users/" + currentUserId,
        {
          method: "GET",
        }
      );
      let currentUser = await awtuser.json();

      currentUser.reservations.push(eventId);

      let awtmod = await fetch("http://localhost:8000/users/" + currentUserId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: currentUser.name,
          family_name: currentUser.family_name,
          email: currentUser.email,
          password: currentUser.password,
          phone: currentUser.phone,
          isAdmin: currentUser.isAdmin,
          reservations: currentUser.reservations,
        }),
      });
      let updateduser = await awtmod.json();
      console.log(updateduser);

      let awt = await fetch("http://localhost:8000/events/" + eventId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventTitle: event.eventTitle,
          artist: event.artist,
          description: event.description,
          location: event.location,
          ticketsNumber: event.ticketsNumber - 1,
          start: event.start,
          end: event.end,
          salle: event.salle,
          image: event.image,
        }),
      });
      let res = await awt.json();
      toast.success("reservation Made")
    } catch (error) {
      toast.error("womp womp!");
      console.error(error);
    }
  }

  return (
    <div className="container_event">
      <ToastContainer />
      <div>
        <img className="img" src={event.image} alt="Event" />
      </div>
      <div className="info">
        <h2>{event.eventTitle}</h2>
        <br />
        <h3>{event.artist}</h3>
        <p>{event.description}</p>
        <p>
          {new Date(event.start).toLocaleString()} -{" "}
          {new Date(event.end).toLocaleString()}
        </p>
        <p>{event.location}</p>
        <p>{event.ticketsNumber} tickets available</p>
        <Button onClick={makeReservation}>Reserve</Button>
      </div>
    </div>
  );
}
