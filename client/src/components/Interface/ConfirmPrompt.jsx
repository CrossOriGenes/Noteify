import { useNavigation } from "react-router-dom";
import Modal from "./Modal";
import { FaCircleExclamation } from "react-icons/fa6";

import classes from "./ConfirmPrompt.module.css";

function ConfirmPrompt(props) {
  const navigation = useNavigation();

  let isDeleting = false;
  if (navigation.state === "submitting") {
    isDeleting = true;
  }

  const promptContent = (
    <>
      <header style={{ backgroundColor: "#ff9c90" }}>
        <h4>Fatal !</h4>
      </header>
      <div className={classes["modal-text"]}>
        <i style={{ color: "#ff6a00" }}>
          <FaCircleExclamation />
        </i>
        <p>Are you sure to delete the note? This action can't be undone!</p>
      </div>
    </>
  );

  return (
    <Modal classname={classes.modal} onClose={props.onReject}>
      <div className={classes.popup}>
        {promptContent}
        <div className={classes["modal-actions"]}>
          <button disabled={isDeleting} type="button" onClick={props.onConfirm}>
            {isDeleting ? "Deleting..." : "Yes"}
          </button>
          <button
            disabled={isDeleting}
            type="button"
            className={classes.declineBtn}
            onClick={props.onReject}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmPrompt;
