import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NoteDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    // Берём заметки из localStorage
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const found = storedNotes.find((n) => n.id === id);
    setNote(found);
  }, [id]);

  if (!note) return <h2 style={{ padding: "20px" }}>Note not found!</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p><em>{note.date}</em></p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}