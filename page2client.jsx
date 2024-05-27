
import Navbar from './components/Navbar';
import FooterPart from './components/FooterPart';
import EventInfo from './components/EventInfo';
import EventsList from './components/EventsList';
import CommentSection from './components/CommentSection'; // Import the CommentSection component
import { BrowserRouter as Router, Route, Routes ,useParams} from 'react-router-dom';
import './page2client.css';

export default function PageEventClient() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<EventsList />} />
          
          <Route path="/event/:id" element={<EventInfoPage  />} />
        </Routes>
        <CommentSection  />
        <FooterPart />
      </div>
    </Router>
  );
}

function EventInfoPage() {
    const {id } = useParams();
    return (
      <>
        <EventInfo eventId={id} />
        <CommentSection eventId={id}  />
      </>
    );
  }