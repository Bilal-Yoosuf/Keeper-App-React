import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const[isShow,setShow]=useState(false);
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setnote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="createArea">
      <form>
        {isShow&&<input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />}
        <textarea
          onClick={()=>setShow(true)}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isShow?3:1}
        />
       <Zoom in={isShow}>
       <AddIcon
          className="createArea__button"
          type="button"
          onClick={(event) => submitNote(event)}
        />
       </Zoom>
      
      </form>
    </div>
  );
}

export default CreateArea;
