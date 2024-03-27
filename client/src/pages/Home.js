import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AddNotePopup from '../components/AddNotePopup';

import classes from '../components/Notes.module.css';


const HomePage = () => {
    const [open, setOpen] = useState(false);
    
    function addNewNoteCardHandler() {
        setOpen(true);
    }
    function closePopupHandler() {
        setOpen(false);
    }

    return (
        <>
            <AnimatePresence>
                {open && <AddNotePopup onClose={closePopupHandler} />}
            </AnimatePresence>
            <div className={classes["create-new-note"]}>
                <div className={classes["add-btn"]} onClick={addNewNoteCardHandler}>
                    <i><FiPlus /></i>
                </div>
                <strong>Add new note</strong>
            </div>
            <div className={classes["redirect-actions"]}>
                <Link to="notes">
                    <strong>See created notes</strong>
                </Link>
            </div>
        </>
    );
};

export default HomePage;
