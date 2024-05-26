import Navbar from "./components/Navbar";
import FooterPart from "./components/FooterPart";
import EventInfo from "./components/EventInfo";
import EventsList from '.components/EventsList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./page2client.css";
export default function PageEventClient(){
    return(
    <Router>
    <div>
    <Navbar/>
    <Routes>
          <Route path="/" element={<EventsList />} />
          <Route path="/event/:id" element={<EventInfoPage />} />
        </Routes>
    
    <FooterPart/>
    </div>
    </Router>
    );}
    let EventInfoPage = ( event ) => {
        const  id  = event.params;
        return <EventInfo eventId={id} />;
      };
      
