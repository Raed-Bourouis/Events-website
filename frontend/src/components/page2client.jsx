import Navbar from "./Navbar";
import FooterPart from "./FooterPart";
import EventInfo from "./EventInfo";
import EventsList from "./EventsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../style/page2client.css";
export default function PageEventClient() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<EventsList />} />
          <Route path="/event/:id" element={<EventInfoPage />} />
        </Routes>

        <FooterPart />
      </div>
    </Router>
  );
}
let EventInfoPage = (event) => {
  const id = event.params;
  return <EventInfo eventId={id} />;
};
