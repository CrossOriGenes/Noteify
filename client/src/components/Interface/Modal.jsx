import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import classes from "./Modal.module.css";

function Modal({ children, title, classname, onClose }) {
  const modalClasses = classname
    ? `${classes.modal} ${classname}`
    : `${classes.modal}`;

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: -58 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className={modalClasses}
      >
        {title && <h2>{title}</h2>}
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
