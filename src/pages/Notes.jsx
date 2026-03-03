import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Notes() {
  // Загружаем заметки из localStorage при старте
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (!title || !content) return;

    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toISOString().split("T")[0],
    };

    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);

    // Сохраняем в localStorage
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setTitle("");
    setContent("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notes List</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {notes.map((note) => (
          <li key={note.id} style={{ marginBottom: "10px" }}>
            <Link to={`/notes/${note.id}`}>
              <strong>{note.title}</strong> - {note.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}