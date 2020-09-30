import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Zoom from '@material-ui/core/Zoom';


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
     <Zoom in={true}>
     <DeleteOutlineIcon
        className="noteButton"
        type="button"
        onClick={handleClick}
      />
     </Zoom>
    </div>
  );
}

export default Note;
