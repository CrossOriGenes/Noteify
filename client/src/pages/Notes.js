import { Link, Await, defer, useLoaderData } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import NotesList from "../components/NotesList";
import NoteSkeleton from "../components/Skeletons/NoteSkeleton";
import { Suspense } from "react";


const NotesPage = (props) => {
    const { notesList } = useLoaderData();

    const fallback = (
        <>
            <NoteSkeleton />
            <NoteSkeleton />
        </>
    );

    return (
        <>
            <header>
                <Link to='..'>
                    <i><IoIosArrowBack /></i>
                    <strong>Back</strong>
                </Link>
            </header>
            <section style={{ marginTop: '2rem' }}>
                <Suspense fallback={fallback}>
                    <Await resolve={notesList}>
                        {loadedNotes => <NotesList notes={loadedNotes} />}
                    </Await>
                </Suspense>
            </section>
        </>
    );
};

export default NotesPage;

async function loadNotes() {
    const response = await fetch('http://localhost:8080/notes');

    if (!response.ok) {
        throw new Error('Failed to load previous notes!')
    }
    else {
        const data = await response.json();
        return data.notes;
    }
}

export function loader() {
    return defer({
        notesList: loadNotes()
    });
}
