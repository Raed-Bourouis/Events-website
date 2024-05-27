
import { useState, useEffect } from 'react';

export default function CommentSection(eventId) {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchComments();
  }, [eventId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/comments/${eventId}`);
      if (!response.ok) {
        throw new Error("Can't fetch comments");
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({  post: eventId, content })
      });
      if (!response.ok) {
        throw new Error('Failed to add comment');
      }
      const newComment = await response.json();
      setComments([...comments, newComment]);
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(`/comments/${commentId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete comment');
      }
      setComments(comments.filter(comment => comment._id !== commentId)||(commentId!=eventId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <form>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit"  onClick={handleSubmit}>Share Comment</button>
      </form>
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment._id} className="comment">
            <p>{comment.content}</p>
            <button onClick={() => handleDelete(comment._id)}>Delete Comment</button>
          </div>
        ))}
      </div>
    </div>
  );
}


