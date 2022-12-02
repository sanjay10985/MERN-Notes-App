import React,{useRef} from "react";
import { BsPlus } from "react-icons/bs";
import "./AddNotes.css";

const AddNotes = () => {
  const autoResize = () => {
    const textarea = document.getElementById("description");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };
  const ref = useRef(null);
  const addnote_icon = (e) => {
    const icon = document.getElementById("icon");
    const form = document.getElementById("form");
    const title = document.getElementById("title");
    icon.classList.add("icon-remove");
    title.classList.add("display-animation");
    form.classList.add("display-animation");
    ref.current.click();
  };
  return (
    <div className="addNotesbox">
      <button className="addNote-icons-div" id="icon" onClick={addnote_icon}>
        <BsPlus className="addNot-icons" />
      </button>
      <form className="addNotes-form" id="form">
        <div className="title-input">
          <input type="text" name="title" id="title" placeholder="Title" />
        </div>
        <div className="desc-input">
          <textarea
            name="description"
            id="description"
            placeholder="Take a note..."
            rows="1"
            // onClick={addnote_icon}
            ref={ref}
            onInput={autoResize}
          />
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
