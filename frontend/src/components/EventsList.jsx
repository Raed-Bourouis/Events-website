import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";

function CreateEvent({ setLoading }) {
  let [eventTitle, setTitle] = useState("");
  let [artist, setArtist] = useState("");
  let [image, setImage] = useState("");
  let [description, setDescription] = useState("");
  let [start, setStart] = useState("");
  let [end, setEnd] = useState("");
  let [location, setLocation] = useState("");
  let [salle, setSalle] = useState("");
  let [ticketsNumber, setTicket] = useState("");

  function addEvent(e) {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:8000/events", {
      method: "POST",
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

  let style={"display":"flex","flex-flow":"column wrap","justify-content":"center","align-items":"center","gap":"20px"}

  return (
    <form>
      <div style={style} className="info">
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
          Salle:
          <input
            type="text"
            value={salle}
            onChange={(e) => setSalle(e.target.value)}
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
        <button onClick={addEvent} type="submit">
          Add Event
        </button>
      </div>
    </form>
  );
}

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  async function deleteEvent(id) {
    try {
      let res = await fetch("http://localhost:8000/events/" + id, {
        method: "DELETE",
      });
      let data = await res.json();
      toast.success("deleted element ! sahit");
      console.log(data);
      setLoading(true);
    } catch (e) {
      toast.error("error while deleting");
      console.log(e);
    }
  }

  useEffect(() => {
    async function fetchEvents() {
      let awt = await fetch("http://localhost:8000/events");
      let res = await awt.json();
      console.log(res);
      setEvents(res);
    }
    if (loading) {
      fetchEvents();
      setLoading(false);
    }
  }, [loading]);

  return (
    <div>
      <ToastContainer />
      <CreateEvent setLoading={setLoading} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Artist</th>
            <th>Image</th>
            <th>Start</th>
            <th>End</th>
            <th>Over</th>
            <th>Location</th>
            <th>Salle</th>
            <th>Tickets Number</th>

            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {events?.length == 0
            ? "No events"
            : events?.map((event) => (
                <tr key={event._id}>
                  <td>{event._id}</td>
                  <td>{event.eventTitle}</td>
                  <td>{event.description}</td>
                  <td>{event.artist}</td>
                  <td>
                    <img width="200px" src={event.image} />
                  </td>
                  <td>{event.start}</td>
                  <td>{event.end}</td>
                  <td>{event.over}</td>
                  <td>{event.location}</td>
                  <td>{event.salle}</td>
                  <td>{event.ticketsNumber}</td>
                  <td>
                    <Link to={`/edit/${event._id}`}>
                      <button>Update</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteEvent(event._id)}
                      style={{ background: "red" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <Link to="/users"><Button>See Users</Button></Link>

    </div>
  );
}
