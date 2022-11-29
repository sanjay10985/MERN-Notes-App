import React from "react";
import { BsPlus } from "react-icons/bs";
import "./AddNotes.css";

const AddNotes = () => {
  const autoResize = () => {
    const textarea = document.getElementById("description");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };
  const onClick = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="addNotesbox">
      <form className="addNotes-form">
        <div className="title-input">
          <input type="text" name="title" id="title" placeholder="Title" />
        </div>
        <div className="desc-input">
          <textarea
            name="description"
            id="description"
            placeholder="Take a note..."
            rows="1"
            
            onInput={autoResize}
          />
        </div>
      <button className="addNote-icons-div" onClick={onClick}>
        <BsPlus className="addNot-icons" />
      </button>
      </form>
    </div>
  );
};

export default AddNotes;
