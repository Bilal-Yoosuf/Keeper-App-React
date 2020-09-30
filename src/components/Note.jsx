import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <DeleteOutlineIcon
        className="noteButton"
        type="button"
        onClick={handleClick}
      >
        Delete
      </DeleteOutlineIcon>
    </div>
  );
}

export default Note;
