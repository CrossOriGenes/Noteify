import { Suspense, useState } from 'react';
import { useNavigate, useLoaderData, Await } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import PreLoader from '../components/Interface/PreLoader';
import Modal from "../components/Interface/Modal";
import NoteForm from "../components/NoteForm";

import classes from "../components/FormPrompt.module.css";

const EditNote = () => {
    const { note } = useLoaderData();
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const fallback = <PreLoader />;

    function cancelModificationHandler() {
        setIsOpen(isOpen => !isOpen);
        navigate('..');
    }

    return (
        <>
            <AnimatePresence>
                {isOpen &&
                    <Modal classname={classes["modal-form"]} onClose={cancelModificationHandler}>
                        <div className={classes.popup}>
                            <header>
                                <h2>Update Note</h2>
                                <i onClick={cancelModificationHandler}>
                                    <IoClose />
                                </i>
                            </header>                            
                            <Suspense fallback={fallback}>
                                <Await resolve={note}>
                                    {noteData =>
                                        <NoteForm
                                            method="PUT"
                                            note={noteData}
                                        />
                                    }
                                </Await>
                            </Suspense>
                        </div>
                    </Modal>
                }
            </AnimatePresence>
        </>
    );
}

export default EditNote;
