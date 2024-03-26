import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as notesLoader } from './pages/Notes';
import { loader as noteDetailsLoader } from './pages/NoteDetails';
import { action as notesAction, delAction as deleteNoteAction } from './utils/Actions';
import RootPage from './pages/Root';
import NotesPage from './pages/Notes';
import NoteDetailsPage from './pages/NoteDetails';
import EditNote from './pages/EditNote';
import HomePage from './pages/Home';
// import NotFoundErr from './components/Interface/NotFoundErr';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <RootPage />,
    // errorElement: <NotFoundErr />,
    loader: notesLoader,
    children: [
      { index: true, element: <HomePage />, action: notesAction },
      { path: 'notes', element: <NotesPage />, loader: notesLoader },
      {
        path: 'notes/:noteId',
        id: 'note-details',
        children: [
          {
            index: true,
            element: <NoteDetailsPage />,
            action: deleteNoteAction,
            loader: noteDetailsLoader
          },
          {
            path: 'edit',
            element: <EditNote />,
            action: notesAction,
            loader: noteDetailsLoader
          }
        ]
      },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
