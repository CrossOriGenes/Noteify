import { useState } from "react";
import { useNavigate, useSubmit } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import ConfirmPrompt from "./ConfirmPrompt";

import "./Menu.module.css";

function Menu({ isOpen, onClose }) {
  const [toggle, setToggle] = useState();
  const navigate = useNavigate();
  const submit = useSubmit();

  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
  };

  const list = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 0px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    visible: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const editNoteToggleHandler = () => {
    onClose();
    navigate("edit");
  };
  const deleteNoteToggleHandler = () => {
    setToggle(true);
    onClose();
  };
  const deleteNoteHandler = () => {
    submit(null, { method: "DELETE" });
    setToggle((toggle) => !toggle);
    navigate("../notes");
  };

  return (
    <>
      <motion.menu animate={isOpen ? "open" : "closed"} variants={variants}>
        <motion.ul variants={list}>
          <motion.li variants={item} onClick={editNoteToggleHandler}>
            <i>
              <FaPencilAlt />
            </i>
            <span>Edit</span>
          </motion.li>
          <motion.li variants={item} onClick={deleteNoteToggleHandler}>
            <i>
              <FaTrash />
            </i>
            <span>Delete</span>
          </motion.li>
        </motion.ul>
      </motion.menu>

      <AnimatePresence>
        {toggle && (
          <ConfirmPrompt
            promptType="delete"
            onConfirm={deleteNoteHandler}
            onReject={() => setToggle(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
