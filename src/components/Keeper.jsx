import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function Keeper() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((newItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((newItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={newItem.title}
            content={newItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Keeper;
