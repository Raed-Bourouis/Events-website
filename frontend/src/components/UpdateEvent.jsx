import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";

export default async function UpdateEvent() {
  let [eventTitle, setTitle] = useState("");
  let [artist, setArtist] = useState("");
  let [image, setImage] = useState("");
  let [description, setDescription] = useState("");
  let [start, setStart] = useState("");
  let [end, setEnd] = useState("");
  let [location, setLocation] = useState("");
  let [salle, setSalle] = useState("");
  let [ticketsNumber, setTicket] = useState("");
  let { id } = useParams();
  console.log(id);
  let res = await fetch("http://localhost:8000/events/" + id, {
    method: "GET",
  });
  let newEvent = res.json();
  function UpdateEvent(e) {
    e.preventDefault();
    fetch("http://localhost:8000/events/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventTitle: eventTitle,
        artist: artist,
        image: image,
        description: description,
        start: start,
        end: end,
        location: location,
        salle: salle,
        ticketsNumber: ticketsNumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          setLoading(false);
        } else {
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
      });
  }

  let style = {
    display: "flex",
    "flex-flow": "column wrap",
    "justify-content": "center",
    "align-items": "center",
    gap: "20px",
  };

  return (
    <form>
      <div style={style} className="info">
        <label>
          Event Title:
          <input
            type="text"
            value={newEvent.eventTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Artist:
          <input
            type="text"
            value={newEvent.artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={newEvent.image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={newEvent.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Start Date:
          <input
            type="datetime-local"
            value={newEvent.start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="datetime-local"
            value={newEvent.end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={newEvent.location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Salle:
          <input
            type="text"
            value={newEvent.salle}
            onChange={(e) => setSalle(e.target.value)}
          />
        </label>
        <label>
          Number of Tickets:
          <input
            type="number"
            value={newEvent.ticketsNumber}
            onChange={(e) => setTicket(e.target.value)}
          />
        </label>
        <button onClick={UpdateEvent} type="submit">
          Add Event
        </button>
      </div>
    </form>
  );
}
