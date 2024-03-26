import { useState } from "react";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import Menu from "./Interface/Menu";
import { motion } from "framer-motion";

import classes from "./NoteItem.module.css";

function NoteItem({ note }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
    >
      <div className={classes["note-details"]}>
        <h2>{note.title}</h2>
        <p>
          {note.description}
        </p>
      </div>
      <div className={classes.footer}>
        <time>{note.timestamp}</time>
        <div className={classes.actions}>
          <motion.i
            whileTap={{ scale: 0.8 }}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <IoEllipsisHorizontalOutline />
          </motion.i>
          <Menu isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </motion.article>
  );
}

export default NoteItem;
