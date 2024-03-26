
import { IoClose } from "react-icons/io5";
import Modal from "./Interface/Modal";
import NoteForm from "./NoteForm";

import classes from "./FormPrompt.module.css";

function AddNotePopup(props) {
  return (
    <>
      <Modal classname={classes["modal-form"]} onClose={props.onClose}>
        <div className={classes.popup}>
          <header>
            <h2>Add a new Note</h2>
            <i onClick={props.onClose}>
              <IoClose />
            </i>
          </header>
          <NoteForm method="POST" />
        </div>
      </Modal>
      {/* )} */}
    </>
  );
}

export default AddNotePopup;
