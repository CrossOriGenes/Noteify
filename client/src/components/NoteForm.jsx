import { Form, useActionData, useNavigation } from "react-router-dom";

import classes from "./NoteForm.module.css";

function NoteForm({ note, method }) {
  const navigation = useNavigation();
  const errData = useActionData();

  let isSubmitting = false;
  if (navigation.state === "submitting") {
    isSubmitting = true;
  }

  return (
    <>
      <Form autoComplete="off" method={method}>
        <div className={classes["input-area"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            maxLength="20"
            defaultValue={note ? note.title : ""}
          />
        </div>
        <div className={classes["input-area"]}>
          <label htmlFor="descr">Description</label>
          <textarea
            id="descr"
            name="descr"
            maxLength="300"
            rows="5"
            defaultValue={note ? note.description : ""}
          ></textarea>
        </div>
        {errData && (
          <ul>
            {Object.values(errData.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </Form>
    </>
  );
}

export default NoteForm;
