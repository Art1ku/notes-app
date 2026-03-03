import { Link } from "react-router-dom";
import { notes } from "../data";

function Notes() {
  return (
    <div>
      <h1>Notes List</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;