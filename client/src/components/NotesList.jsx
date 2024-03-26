import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { randomColors } from "../utils/BgClrGenerator";

import classes from "./NotesList.module.css";

function NotesList({ notes }) {
  return (
    <>
      {notes.map((note) => (
        <Link to={note.id} key={note.id}>
          <motion.div
            className={classes.note}
            style={{ background: `${randomColors()}` }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
          >
            <div className={classes.content}>
              <h4>{note.title}</h4>
              <p>{note.description}</p>
            </div>
            <div className={classes.footnote}>
              <em>Click to view note</em>
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
}

export default NotesList;
