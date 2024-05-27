import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";


export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");


  let idparams = useParams();
  let eventId = idparams.id;

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:8000/comment/`);
      if (!response.ok) {
        throw new Error("Can't fetch comments");
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchComments();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let awt = await fetch("http://localhost:8000/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId: eventId, content: content }),
      });
      let response = await awt.json();
      toast.success("comment added");
      // const newComment = await response.json();
      // setComments([...comments, newComment]);
      setContent("");
    } catch (error) {
      toast.error("womp womp!");
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="comment-section">
        <h3>Comments</h3>
        <form>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <button type="submit" onClick={handleSubmit}>
            Share Comment
          </button>
        </form>
        <div className="comments-list">
          {comments.map((comment) => {
            if(comment.eventId==eventId){
            return(<div key={comment._id} className="comment">
              <p>{comment.content}</p>
 
            </div>)}}
          )}
        </div>
      </div>
    </div>
  );
}
