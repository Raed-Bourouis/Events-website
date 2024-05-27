

import EventInfo from './EventInfo';
import CommentSection from './CommentSection'; // Import the CommentSection component
import { BrowserRouter as Router, Link, Route, Routes ,useParams} from 'react-router-dom';
import '../style/page2client.css';

export default function PageEventClient() {

  function EventInfoPage() {
    const {id} = useParams();
    return (
      <div>
        <EventInfo  />
        <CommentSection />
      </div>
    );
  }
  return (
      <div>
          
          
        <EventInfoPage/>
        
      </div>
  );
}

// function EventInfoPage() {
//     const {id } = useParams();
//     return (
//       <>
//         <EventInfo eventId={id} />
//         <CommentSection eventId={id}  />
//       </>
//     );
//   }