import { useParams, useNavigate } from "react-router-dom";
import { notes } from "../data";

function NoteDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return <h2>Note not found.</h2>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p><strong>Created:</strong> {note.date}</p>

      <button onClick={() => navigate("/notes")}>
        Back
      </button>
    </div>
  );
}

export default NoteDetails;