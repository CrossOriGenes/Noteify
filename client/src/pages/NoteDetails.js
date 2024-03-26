import { Link, Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { IoIosArrowBack } from 'react-icons/io';
import NoteItem from "../components/NoteItem";
import NoteItemSkeleton from "../components/Skeletons/NoteItemSkeleton";

const NoteDetailsPage = () => {
    const { note } = useLoaderData();

    const fallback = <NoteItemSkeleton />;

    return (
        <>
            <header>
                <Link to='../notes'>
                    <i><IoIosArrowBack /></i>
                    <strong>Back</strong>
                </Link>
            </header>
            <Suspense fallback={fallback} >
                <Await resolve={note}>
                    {noteData => <NoteItem note={noteData} />}
                </Await>
            </Suspense>
        </>
    );
};

export default NoteDetailsPage;


async function noteLoader(params) {
    const id = params.noteId;
    const response = await fetch(`http://localhost:8080/notes/${id}`);
    if (!response.ok) {
        throw new Error('Failed to load note detalis!');
    } else {
        const data = await response.json();
        return data.note;
    }
}

export function loader({ params }) {
    return defer({
        note: noteLoader(params)
    })
}
